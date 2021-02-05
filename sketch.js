const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(136,300,20,30);
    box3 = new Box(179,300,17,50);
    ground = new Ground(200,300,600,20);
    
}
function draw(){
    background("cyan");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
     ground.display();
}