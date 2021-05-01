class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1.0,
            density: 0.8,
            friction: 0
        }

        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
      
       
 
        World.add(world,this.body);

        
    }

    display(){
 
        var pos = this.body.position;
       
    
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("grey");
        ellipse(0, 0, this.radius,this.radius);
       // imageMode(CENTER);
       // image(this.image, 0, 0,90,90);
        pop();
    
       }
}