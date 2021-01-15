/*
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

 let playMode= 'sustain';
 let ball = {};
 let sample0;
 let sample1;
 let sample2;
 let img1;
 //let y = 0;
 let img2;
 let img3;
 //function preload () {
   //soundFormats('mp3', 'ogg');
   //song0= loadSound('data/askisi2_01.mp3');
   //song1=loadSound ('data/kipouros1_01.mp3');
// }
function setup() {
   img1=loadImage('data/m.jpg');
   img2=loadImage('data/fl2.jpg');
   img3=loadImage('data/fl3.jpg');
   createCanvas (windowWidth,windowHeight);
   soundFormats ('mp3', 'ogg');
   sample0= loadSound('data/xronos1.mp3');
   sample1=loadSound ('data/xronos2a.mp3');
   sample2=loadSound ('data/xronos3a.mp3');

   
 }
 
 function draw() {
  background(img1, 0,0,windowWidth,windowHeight);
  ball.x = constrain(mouseX, 0, width);
  ellipse(ball.x, height /2, 20, 20);
  
 
  //image(img, 0,windowHeight, windowWidth,0);
   //img (0,0,windowWidth,windowHeight);
   let str = 'Click on the Screen, as many times as you think.Then press enter. Release when you feel ready.';
   textSize(25);
   fill(125,100,200);
   text (str,width/15, height/2);
   

 
 }
function mousePressed() {
  let panning = map(ball.x, 0, width, -1.0, 1.0);
  sample0.pan(panning);
  sample0.play();
  background(img1,0,0,windowWidth,windowHeight);
}




function keyPressed() {
 
  if (keyCode === ENTER){
    // background (img2,0,0,windowWidth,windowHeight);
  sample1.play();
 //sample2.stop();
  
  
  }
}
function keyReleased() {
  //background (img3,0,0,windowWidth,windowHeight);
  sample2.play() ;
  sample1.stop();
  
}


  
  
