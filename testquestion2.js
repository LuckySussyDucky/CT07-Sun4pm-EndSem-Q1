let square;

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 10;

    square = new Sprite(200, 300, 25, 25, "dynamic");
}

function draw(){
    background("grey");

    if(mouse.presses() ){
        square.vel.y = -5;
    }
}
