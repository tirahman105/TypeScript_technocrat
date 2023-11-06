{

    // 
// class 

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor( public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }

}
const dog = new Animal("German", "dog", "gheu gheu")

dog.makeSound();


    // 
}