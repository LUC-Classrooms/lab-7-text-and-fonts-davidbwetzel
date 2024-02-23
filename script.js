/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Courier");
}

function draw() {
  background(200);
  if(mouseIsPressed){
    textFont("Courier");
    textSize(32);
    text("It's too crowded!", 20, 100);
  } else {
    textSize(18);
    textFont("Times");
    text("Nobody goes there anymore ...", 20, 100);  
  }


}
