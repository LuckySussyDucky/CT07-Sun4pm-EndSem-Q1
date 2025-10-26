let bird
let background, birdImg;

function preload(){
    background = loadImage("assets/background.png");
    birdImg = loadImage("assets/bird.png");
}

function setup(){
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 40, 30, "static");
    bird.img = birdImg;
}

function draw(){
    image(background, 0, 0, width, height);
}
