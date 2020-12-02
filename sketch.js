const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(940,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(820,320);
    log1 = new log(820,260,320,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(940,240,70,70);
    pig2 = new pig(820,220);
    log2 = new log(820,180,320,PI/2);

    box5 = new Box(820,140,70,70);
    log3 = new log(760,120,170,PI/7);
    log4 = new log(860,120,170,-PI/7);

    bird1=new bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
   
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    
    box5.display();
    log3.display();
    log4.display();

    bird1.display();
}