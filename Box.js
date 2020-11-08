class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.01,
        'density':1.0
    }
    this.image = loadImage("GradBox.png");
    this.box = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    World.add(world, this.box);
  }
  display(){
    imageMode(CENTER);
    // if(this.box.position.x > 800 || this.box.position.x <0 && this.box.position.y < 0 || this.box.position.y > 700){
    if(this.box.speed > 5){
      World.remove(world, this.box);
      push();
      this.Visibility = this.Visibility - 5;
      this.Visibility >= 0;
      tint(255, this.Visibility);
      image(this.image, this.box.position.x, this.box.position.y, this.width, this.height);
      pop();
    }else{
      push();
      imageMode(CENTER);
      image(this.image, this.box.position.x, this.box.position.y, this.width * 1.15, this.height * 1.15);
      pop();
    }
  }
};
