/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Courier");
}

var phrase1 = "Nobody goes there any more ...";
var phrase2 = "it's too crowded!";
var phrase = ""; 

function draw() {
  background(200);
  if(mouseIsPressed){
    textFont("Courier");
    textSize(32);
    phrase = phrase2;
  } else {
    textSize(18);
    textFont("Times");
    phrase = phrase1;
  }
  text(phrase, 20, 100);


}
