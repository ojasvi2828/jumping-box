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
     b = createSprite(random(20,750));
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   b.display();
drawSprite();
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(b) && b.bounceoff(box1)){
        b.shapeColor = "pink";
    }
    if(box2.isTouching(b) && b.bounceoff(box2)){
        b.shapeColor = "white";
    }

    if(box3.isTouching(b) && b.bounceoff(box3)){
        b.shapeColor = "skyBlue";
    }
    if(box4.isTouching(b) && b.bounceoff(box4)){
        b.shapeColor = "yellow";
    }
}
