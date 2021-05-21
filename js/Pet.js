class Pet {
    constructor(name, fur){
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTail = true;
        this.voiceCount = 0;
        this.sound = 'au, au !!!';
        this.children = [];

    }

    voice(){
        
        console.log(`${this.name}: ${this.sound} (${++this.voiceCount})`);
    }
    introduce(){
        console.log(`Hi my name is ${this.name}, my fur color is - ${this.furColor}, and I make an ${this.sound} sound.}`);
    }
    childCount(){
        console.log(`${this.name} has ${this.children.length} children`);
    }
}

module.exports = Pet;