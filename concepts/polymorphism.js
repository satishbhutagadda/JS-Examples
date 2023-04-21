// Explanation:
// Polymorphism is one of the core concepts of object-oriented programming language.
// Polymorphism means the same function with different signatures is called many times.
// In real life, for example, a boy at the same time may be a student, class monitor, etc.
// So a boy can perform different operations at the same time. This is called polymorphism.

class Animal{

    constructor(name){
        this.name = name
    }

    eats(){
        console.log (this.name+' eats food');
    }
}

class Alligator extends Animal{

    eats(){
        super.eats();
        console.log (this.name+' eats fishes');
    }
}

let murphy = new Alligator('Murphy');
murphy.eats();