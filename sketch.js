const Plane = Matter.plane;
const Hammer= Matter.hammer;
const Stone = Matter.stone;

var plane, hammer;
var stone, rubber;

function setup(){
    var canvas = createCanvas(1200,400);
    plane = Plane.create();
    world = engine.world;
    ground=new Ground(600,390,1200,20)
    hammer=new Hammer(700,320,70,70)
    rubber=new Rubber(920,320,70,70)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    

plane.display() 
hammer.display()
stone.display()
rubber.display()
}

