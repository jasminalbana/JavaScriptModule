// //This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!


// //------------------------------------------------------Use Dot Notation to Access the Properties of an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   //console.log(dog.name);
//   //console.log(dog.numLegs);

// //------------------------------------------------------Create a Method on an Object
// let cat = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function(){
//         return "The cat has "+ cat.numLegs + " legs."
//     }
//   };
// //console.log(cat.sayLegs());

// //------------------------------------------------------Make Code More Reusable with the this Keyword


// let bear = {                                              //creating new Object with parameters
//   name: "Spot",
//   numLegs: 5,
//   sayLegs: function(){
//       return "The bear has "+ this.numLegs + " legs."
//   }
// };
// //console.log(bear.sayLegs());


// //------------------------------------------------------Define a Constructor Function
// function Dog(){
//   this.name = "Bogart";
//   this.color = "White and Black";
//   this.numLegs = 4;
// }


// let hound = new Dog()
// hound.name = "star";
// //console.log(hound.name);


// //------------------------------------------------------Extend Constructors to Receive Arguments
// function bird(name,color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let terrier = new bird ("chuchu","brown");
// //console.log(terrier.name);


// //------------------------------------------------------Verify an Object's Constructor with instanceof
// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }
// let myHouse = new House(4);
// //console.log(myHouse instanceof House);


// //------------------------------------------------------Use Prototype Properties to Reduce Duplicate Code
// function Dog1(name) {
//   this.name = name;
// }
// Dog1.prototype.numLegs = 4;                         //add new property to the object
// let beagle = new Dog1("Snoopy");
// beagle.numLegs = 3;
// //console.log(beagle.numLegs);


// //------------------------------------------------------Iterate Over All Properties
// function Dog2(name) {
//   this.name = name;
// }

// Dog2.prototype.numLegs = 4;

// let beagle2 = new Dog2("Snoopy");
// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle2){
//   if(beagle2.hasOwnProperty(property)){
//     ownProps.push(property);
//   }else{
//     prototypeProps.push(property)
//   }
// }
// //console.log(ownProps);  
// //console.log(prototypeProps);


// //-----------------------------------------------------Understand the Constructor Property
// function Dog(name) {
//   this.name = name;
// }
// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //console.log(joinDogFraternity(hound))

// //-----------------------------------------------------Change the Prototype to a New Object
// Dog1.prototype = {
//   numLegs: 2, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// let Doggy = new Dog1("dogname");
// //console.log(Doggy.name);
// //Doggy.eat()
// //Doggy.describe()

// //-----------------------------------------------------Inherit Behaviors from a Supertype
// function Cat123(name) {
//   this.name = name;
// }

// Cat123.prototype = {
//   constructor: Cat123,
// };

// function Bear123(name) {
//   this.name = name;
// }

// Bear123.prototype = {
//   constructor: Bear123,
// };

// function Animal() { }
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// let newBear = new Animal();
// newBear.eat();



// function Animal() { }
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { 
//   this.numLegs = 2;
// }
// Dog.prototype = Object.create(Animal.prototype);
// let beagle5 = new Dog();

// console.log(beagle5.numLegs)
// beagle5.eat()


//-----------------------------------------------------Reset an Inherited Constructor Property -- ibabalik sa original object

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();


//-----------------------------------------------------Add Methods After Inheritance
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function (){
  console.log("Woof!");
}

let willow = new Dog();
//willow.bark()

//-----------------------------------------------------Override Inherited Methods
Dog.prototype.bark = function (){
    console.log("warf warf warf");
}
//willow.bark();



//-----------------------------------------------------Use an IIFE to Create a Module

let funModule = (function (){
    return{
      isCuteMixin: function(obj) {
      obj.isCute = function() {
        console.log("Gliding on the water");
      };
    },
     singMixin: function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
      };
     }
    }
  })();

  
  funModule.isCuteMixin(willow);
  willow.isCute();
