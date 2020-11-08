class rope{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 50
        }
        this.pointB = pointB
        this.sling3 = loadImage("sling3");
        this.hold = Matter.Constraint.create(options);
        World.add(world, this.hold);
    }

    fly(){
        this.hold.bodyA = null;
    }

    holdAgain(a){
        this.hold.bodyA = a;
    }

    show(){
        if(this.hold.bodyA){
            var pointA = this.hold.bodyA.position;
            var pointB = this.pointB;
            push();
            
            imageMode(CENTER);
            stroke(240, 0, 0);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x, pointA.y,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x, pointA.y,15,30);
            }
           
            
            pop();
        }
    }
}