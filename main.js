let obacticl = document.getElementById( "obacticl" );
let hole = document.getElementById( "hole" );
let player = document.getElementById( "player" );
let score = 0;
hole.addEventListener( "animationiteration",() => {
  let rand = Math.random() * ( 500 - 150 );
  hole.style.top = rand + "px"
  score++;
}
);
setInterval( function() {
  let birdTop = parseInt( getComputedStyle( player ).getPropertyValue( "top" ) );
  if( !isJumping )
  {
    player.style.top = birdTop + 3 + "px";
  }
  let obacticlLeft = parseInt( getComputedStyle( obacticl ).getPropertyValue( "left" ) );
  let holeTop = parseInt( getComputedStyle( hole ).getPropertyValue( "top" ) );
  if( birdTop > 480 || ( obacticlLeft < 20 && ( birdTop > holeTop + 150 || birdTop < holeTop ) ) )
  {
    alert( `Game Over. Your Score is ${ score }` );
    player.style.top = 100 + "px";
    obacticl.style.left = "100%";
    hole.style.left = "100%";
    score = 0;
  }
},10 );

let isJumping = false;
document.addEventListener( "click",() => {
  isJumping = true;
  let jumpTimer = 0;
  let jumpInterval = setInterval( function() {
    jumpTimer++;
    let birdTop = parseInt( getComputedStyle( player ).getPropertyValue( "top" ) );
    if( birdTop > 0 && jumpTimer < 15 )
    {
      player.style.top = birdTop - 5 + "px";
    }
    if( jumpTimer > 20 )
    {
      clearInterval( jumpInterval );
      isJumping = false;
      jumpTimer = 0;
    }
  },10 )
} );