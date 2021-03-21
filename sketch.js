var canvas;
var music;
var box1,box2,box3,box4;
var b;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    box1 = createSprite(100,600,130,20);
    box1.shapeColor = "red";
    box2 = createSprite(270,600,130,20);
    box2.shapeColor = "blue";
    box3 = createSprite(440,600,130,20);
    box3.shapeColor = "green";
    box4 = createSprite(605,600,130,20);
    box4.shapeColor = "brown";
    //create box sprite and give velocity
     b = createSprite(random(20,750),100,40,40);
     b.shapeColor = "white";
     b.velocityX = 4;
     b.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges = createEdgeSprites();
  b.bounceOff (edges);
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(b) && b.bounceOff(box1)){
        b.shapeColor = "red";
    }
    if(box2.isTouching(b) && b.bounceOff(box2)){
        b.shapeColor = "blue";
        music.play();
        }

    if(box3.isTouching(b) && b.bounceOff(box3)){
        b.shapeColor = "green";
    }
    if(box4.isTouching(b) && b.bounceOff(box4)){
        b.shapeColor = "brown";
        music.stop();
        b.velocityX = 0;
        b.velocityY = 0;
    }
    drawSprites();
}
