//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!
//Basic Algorithm Scripting

//------------------------------------------Convert Celsius to Fahrenheit
function convertCelsius(celsius){
    return fahrenheit = (celsius*(9/5)) + 32;
}
//console.log(convertCelsius(32));


//------------------------------------------Convert Celsius to Fahrenheit
function reverseString(str){
   // var splitStr = str.split("");
   // var reverseArray = splitStr.reverse();
   // var joinArray = reverseArray.join("");
   // return console.log(joinArray);           //usual way

   //return console.log(str.split("").reverse().join(""));
}
reverseString("hello")

//------------------------------------------factoralize
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
  //  return console.log(product);
} 
factorialize(5);


//------------------------------------------Find the Longest Word in a String
function findLongestWordLength(str) {
    let words = str.split(" ");                     //will make the string into an array
    let maxlength = 0;

    for (let i = 0; i < words.length; i++){         //will check every item in the loop
        if(words[i].length > maxlength){           //check the word length if greater than maxlength which is initial value is 0
            maxlength = words[i].length;           //if greater than maxlength it will save in maxlength
        }
    }
    //return console.log(maxlength);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


  function findTheLongest(arr){
   
}


function confirmEnding(str, target) {
  let arrayStr = [...str]
  let lastStr = arrayStr.pop();

 
  return console.log(lastStr == target);


 // return str;
}

//confirmEnding("Bastian", "n");

//------------------------------------------Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");



//------------------------------------------Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newArray =[]
  if (num > 0){
      for (let i = 0; i < num; i++){
        newArray.push(str)
      }
    }else{
        return "Not acceptable";
      }
  return newArray.join("")
}
//console.log(repeatStringNumTimes("abc", -1));

//------------------------------------------Truncate a String
function truncateString(str, num) {

  if(str.length > num){
    return str.slice(0,num)+ "...";
  }else{
     return str;
  }
}
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 6));

//------------------------------------------Finders Keepers
function findElement(arr, func) {
  let num = 0;
   for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
//console.log(findElement([1, 2, 3, 4], num => num % 4 === 0));

//------------------------------------------Boo who
function booWho(bool) {
  return typeof bool === "boolean";
}
//console.log(booWho(true));


function titleCase(str) {
  const newTitle = str.split(" ");                                                            //make the string to an array, space in "" makes every word in an array
  const updatedTitle = [];                                                                    //update every word after loop
  for (let st in newTitle) {                                                                  //variable st is every word in the array, for loop to check every word in the loop
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return console.log(updatedTitle.join(" "));                                                 //join the array in newTitle to a new sentence and make a string of sentence again
}

//titleCase("I'm a little tea pot");

//------------------------------------------Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//------------------------------------------Falsy Bouncer
function bouncer(arr) {
  var arrNew = []                           //create new array when an item is not a boolean
  for (let i = 0; i < arr.length; i++){     //for loop to check every item in arr, arr.length for no. of iteration, 
    if(arr[i]){                             //if statement to check if the index item is boolean
      arrNew.push(arr[i])
    }
  }
  return arrNew;                            //retrun new array without the boolean item
}
//console.log(bouncer([7, "ate", "", false, 9]));

//------------------------------------------Mutations
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
//console.log(mutation(["hello", "hey"]));

//------------------------------------------Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));