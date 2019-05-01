function preload() {
  pimg = loadImage(".jpg"); // <--- image goes here 
}
function setup() {
  createCanvas(windowWidth, windowHeight);


}
function draw() {

  for (let i = 0; i < 100; i++) {
    let r = random(10, 30);
    let e = random(0, 30);



    x = random(width);
    y = random(height);

    c = pimg.get(int(x), int(y));
    fill(c);
rect(x, y, r, r, e, e, e, e);

  }
}
