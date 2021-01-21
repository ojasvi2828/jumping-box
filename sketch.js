var canvas;
var music;
var box1,box2,box3,box4;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    box1 = createSprite(200,500,50,10);
    box2 = createSprite(300,500,50,10);
    box3 = createSprite(400,500,50,10);
    box4 = createSprite(500,500,50,10);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


drawSprite();
    //add condition to check if box touching surface and make it box
}
