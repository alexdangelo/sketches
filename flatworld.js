function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let y = 0; y < 400; y += 100) {
    for ( let x = 0; x < 400;x+=100){
      if (y % 3 === 0) {
        fill('green');
      }
      else {
        fill('blue');
      }
      square(  x, y, 100 );
    }
  }
}
