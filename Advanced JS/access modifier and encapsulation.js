class Phone{

    //property
    model="Iphone12";
    static storage=128;
    color=["black","gold","blue"];
    #_ram=6;

    get ram(){
        return this.#_ram;

    }
    set ram(value){
        this.#_ram=value;
        
    }


    //method
    static network(){
        console.log("5G support");
    }
    phoneStorage=()=>Iphone12.model+"has"+Iphone12.ram+"GB";
    promotion(){
        return this.model+"has"+this.ram+"GB and"+this.storage+"GB storage";
    }
}
let phone=new Phone();
