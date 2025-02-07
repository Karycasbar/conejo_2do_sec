class Ground{
    constructor(x,y,w,h){
        var options ={
            isStatic: true //hace que el cuerpo se quede estatico
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}