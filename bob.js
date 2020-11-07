class Bob{
    constructor(x, y, diameter){
    
        var options = {
    
            isStatic: true, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
                
             }
             
             this.diameter = diameter;
            this.object = Bodies.circle(x, y, diameter, options);
          
           fill("lightgreen");
           noStroke();
         World.add(world, this.object); 
   
    }
    display(){
    
    var pos = this.object.position;
    push();

translate(pos.x, pos.y);

        ellipseMode(CENTER);
       ellipse(0, 0,this.radius); 
    pop();
    }
    }