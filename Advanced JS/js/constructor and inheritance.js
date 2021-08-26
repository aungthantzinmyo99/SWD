class Phone{
    constructor(model,ram,rom){
       this.model=model;
       this.ram=ram;
       this.rom=rom;
       console.log(`${this.model} has ${this.ram} GB and ${this.rom} GB`);
    }
    
}

let phone12=new Phone("Iphone12","6GB","128");
let phone12Pro=new Phone("Iphone12Pro","12GB","128");
let phone12ProMax=new Phone("Iphone12","64GB","128");


class Animal{
    type="warm blooded";
    legs=4;
}


class Dog extends Animal{
    skill(){
        console.log("Dog can run fast");
    }
}

class MalLone extends Dog{
    name="mg mal lone";
    skill(){
        console.log(`${this.name} can run more fast`);
    }
}

class Bird extends Animal{

}