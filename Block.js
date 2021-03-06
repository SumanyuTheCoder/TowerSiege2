class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
       
      if(this.body.speed < 3){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
  
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity );
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
    
    }
}