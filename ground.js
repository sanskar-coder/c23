class Ground{
    constructor(x,y,width,height){
    var obj = {isStatic : true}
    this.groundObj=Bodies.rectangle(x,y,width,height,obj);
    this.width=width;
    this.height=height;
    World.add(world,this.groundObj);

    }
    display(){
     var pos = this.groundObj.position;
     rectMode(CENTER);
     fill ("brown");
     rect(pos.x,pos.y,this.width,this.height);   
    }
}