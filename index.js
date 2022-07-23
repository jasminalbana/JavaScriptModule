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
 function timesFive(num){
    return num * 5;
  }
  
  const myNum = timesFive(2);    //func ang nagsupply ng operation
  console.log(myNum);