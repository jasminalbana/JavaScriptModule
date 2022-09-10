//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!

//------------------------------------Compare Scopes of the var and let Keywords

function checkScope() {
    let i = 'love scope';
    if (true) {
    // let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//checkScope();

//-----------------------------------Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
 
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
//editInPlace();


function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//console.log(freezeObj());

//-----------------------------------Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//console.log(sum(1, 2, 3))






const bicycle = {
  gear: 2,
  setGear(newGear){
    return this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);