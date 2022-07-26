//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!

//-------------------------------------------------------------------concatenate
const someAdjective = "Javascript";
let myStr = "I am learning ";
myStr += someAdjective;
// console.log(myStr);


//--------------------------------------------------------------------Indexing
let myName;
const thisIsmyName= "Jasmin";
myName = thisIsmyName[0];
//console.log(myName);


//--------------------------------------------------------------------get the last value of a string
myName = thisIsmyName[thisIsmyName.length -1];
//console.log(myName);


//---------------------------------------------------------------------get the value of a Nth-to-Last Character in a String
myName = thisIsmyName[thisIsmyName.length - 2]
//console.log(myName)


//---Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[1] = "j";
//console.log(myArray);


//-----------------------------------------------------------------------Access Multi-Dimensional Arrays With Indexes
let myArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
myData = myArrays[0][0];
//console.log(myData);


//-----------------------------------------------------------------------Manipulate Arrays With push() at the end of the array
const myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3]);
//console.log(myArray1);


//----------------------------------------------------------------------Manipulate Arrays With pop() get the value of the last item in array or/and remove it to the array
const myArray2 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray2.pop();
//console.log(removedFromMyArray);
//console.log(myArray2);


//-----------------------------------------------------------------------Manipulate Arrays With shift() get the value of the first item in array or/and remove it to the array
const myArray3 = [["John", 23], ["dog", 3]];
const removedFromMyArray3 = myArray3.shift();
//console.log(myArray3);
//console.log(removedFromMyArray3);


//------------------------------------------------------------------------Manipulate Arrays With unshift() add at the start of the array
const myArray4 = [["John", 23], ["dog", 3]];
myArray4.shift();
myArray4.unshift(["Paul", 35]);
//console.log(myArray4);


//------------------------------------------------------------------------Shopping List
const myList = [];
myList[0] =["choc",0];
myList[1] =["milk",1];
myList[2] =["vanilla",2];
myList[3] =["salted",3];
myList[4] =["peanut",4];
//console.log(myList);


//------------------------------------------------------------------------Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
  }
  
 // reusableFunction();


//------------------------------------------------------------------------Passing Values to Functions with Arguments 
function functionWithArgs (param1, param2){
    console.log(param1+param2);
  }
  
 // functionWithArgs(5,2);   //ikaw ang magsusuply sa func


 //-----------------------------------------------------------------------Return a Value from a Function with Return 
 //ex.1
 function timesFive(num){
    return num * 5;
  }
  const myNum = timesFive(2);    //func ang nagsupply ng operation
  //console.log(myNum);

  //ex.2
  function plusThree(num) {
    return num + 3;
  }
  const answer = plusThree(5);
  //console.log(answer);


//------------------------------------------------------------------------Understanding Undefined Value returned from a Function (if no return args)
//ex.1
let sum = 0;

function addThree(sum) {
  return sum + 3;
}

function addFive(sum) {
  return sum + 5;
}

let addThreeValue = addThree(3);
let addFiveValue = addFive();

//console.log(addThreeValue);
//console.log(addFiveValue);

//ex.2
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
//console.log(processed);


//--------------------------------------------------------------------------Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item) //value is [1, 2, 3, 4, 5, 6]
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];
const testArr2 = ["a","b","c","d"];

// Display code
/*
console.log("Before: " + JSON.stringify(testArr)); //nilabas lang yung testArr na variable before tinawag yung function.
console.log(nextInLine(testArr, 6)); //called func nextInLine then filled params and the run args and return 1 because shift method is used which is to return the 1st value of the array
console.log("After: " + JSON.stringify(testArr));

console.log(nextInLine(testArr2, "e"));
console.log("Next Example" + JSON.stringify(testArr2))
*/


//----------------------------------------------------------------------Use Conditional Logic with If Statements
//ex.1
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

//console.log(trueOrFalse(true));

//---------------------------------------------------------------------------Comparison with the Equality Operator
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue == "Hi"){
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

//console.log(trueOrFalse("Hello"));
//console.log(testEqual("Hello")); //it is fine to have console here even func is below it.

function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

//----------------------------------------------------------------------Practice comparing different values
function compareEquality(a,b){
  if (a === b){
    return "equal";
  }
  return "not equal";
}

//console.log(compareEquality(1,"1"));

//----------------------------------------------------------------------Comparison with the Inequality Operator
function negativeEquality(a,b){
  if(a != b){
    return "incorrect password";
  }
  return "password accepted";
}
//console.log(negativeEquality(1,1));


//----------------------------------------------------------------------Comparison with the Greater Than Operator
function greaterThan(value){
  if (value > 100){
    return "over 100";
  }

  if (value > 200){
    return "over 200";
  }

  return "under 100";
}
//console.log(greaterThan(20));
//console.log(greaterThan(201));

//------------------------------------------------------------------------Comparison with the Greater Than Or Equal To Operator
function greaterThanOrEqualTo(value){
  if (value >= 10){
    return "equal or greater than 10";
  }

  if(value >= 50){
    return "equal or greater than 50";
  }

  return "less than 5";
}
//console.log(greaterThanOrEqualTo(3));


//-------------------------------------------------------------------------Comparison with the Less Than To Operator
function lessThan(value){
  if(value < 10){
    return "less than 10";
  }

  if(value < 20){
    return "less than 20";
  }

  return "more than 20";
}
//console.log(lessThan(10));


//-------------------------------------------------------------------------Comparison with the Less Than Or Equal To Operator
function lessThanOrEaualTo(value){
  if(value <= 10){
    return "less than or equal to 10";
  }

  if(value <= 20){
    return "less than or equal to 20";
  }
  return "more than 20";
}
//console.log(lessThanOrEaualTo(21));


//----------------------------------------------------------------------------
//nested if statement
function logicalAndOperator(value){
  if(value >=10){
    if(value <=20){
      return "greater than 10 less than 20";
    }
  }
  return "more than 20"
}
//console.log(logicalAndOperator(21));

//---------------------------------------------------------------------------Introducing Else Statements
//ex.1
function ifElse(params){
  let reult = "";
  if (params > 5){
    result = "hey you are over five";
  } else{
    result = "hey you are less than five";
  }
  return result;
}
//console.log(ifElse(2));

//ex.2
function ifElseNum(value){
  if(value >= 5 && value <= 10){
    return "hey you got " + value;
  }
  else {
    return "hey please input another value";
  }
}
//console.log(ifElseNum(11));

//-------------------------------------------------------------------------------Introducing Else If Statements
function ifElseStatement(value){
  if (value >= 5){
    return "hey you got average value of " + value;
  }
  else if (value <= 5){
    return "hey you got poor value of "+ value;
  }
  else{
    return "incorrect input";
  }
}
//console.log(ifElseStatement("3"));


//--------------------------------------------------------------------------------Chaining If Else Statements
function testSize(value){
  if (value == 5){
    return "your value is "+ value;
  } else if(value ==10){
    return "your value is "+ value;
  } else if (value == 15){
    return "your value is "+ value;
  }
  else{
    return "Hey your "+value + " is invalid";
  }
}

//console.log(testSize(5));

//-----------------------------------------------------------------------Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return names[0];
  } else if (strokes <= par-2){
    return names[1];
  } else if ( strokes === par-1){
    return names[2];
  } else if (strokes === par){
    return names[3];
  } else if (strokes === par +1){
    return names[4];
  } else if (strokes === par +2){
    return names[5];
  } else if (strokes >= par +3){
    return names[6];
  } else {
      return "Change Me";
  }
  // Only change code above this line
}
//console.log(golfScore(5, 4));

//--------------------------------------------------------------------------Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch (val){
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(2));