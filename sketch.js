var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var skyImage,sky2,sky3

function preload(){
    skyImage=loadImage("rainbow.jpg")
    music=loadSound("music.mp3")
    // load sound here

}


function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    block2 = createSprite(width*0,height-20,600,30);
    block2.shapeColor = "orange";

    block1 = createSprite(width-990,height-20,350,30);
    block1.shapeColor = "blue";

    block3 = createSprite(width-550,height-20,350,30);
    block3.shapeColor = "red";

    block4 = createSprite(width-100,height-20,400,30);
    block4.shapeColor = "green"

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = 0
    //write code to add velocityX and velocityY
   ball.setVelocity(5,5)
}

function draw() {
    background(skyImage);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bou'nce off ball from the block1 
    if(block1.isTouching(ball)&&ball.bounceOff(block1)  ){
        ball.shapeColor = "blue";
        music.play()

    }



    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.setVelocity(0,0);
        music.stop()
        
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor = "red"
        
    }

    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor = "green"
        
    }

    drawSprites();
}
