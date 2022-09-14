function setup() {
 createCanvas(600, 600, WEBGL);
 smooth(8);
 noStroke();
}
function draw() {
 background(0);
 
 ambientLight(128, 128, 128);
 
 directionalLight(128, 128, 128, cos(frameCount * 0.1), 1, -1);
 
 push();
 translate(-width * 0.25, 0, 0);
 
 ambientMaterial(255, 0, 0);
 specularMaterial(0, 0, 0);
 sphere(width * 0.2);
 
 pop();
 
 push();
 translate(width * 0.25, 0, 0);
 
 ambientMaterial(255, 0, 0);
 specularMaterial(255, 255, 255);
 sphere(width * 0.2);
 
 pop();
}
 
 
