//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!

let yourArray = [false, true, 1, "jas"];
//console.log(yourArray[2]);
//console.log(yourArray.length)
//console.log(yourArray)

//------------------------------------------------Access an Array's Contents Using Bracket Notation

yourArray[2] = "hello world";
//console.log(yourArray)

//------------------------------------------------Add Items to an Array with push() and unshift()

function myArray(arr){
    arr.push(1,2,3)
    arr.unshift(5,6,7)

    return arr;
}
//console.log(myArray([]))

//------------------------------------------------Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
 // console.log(popShift(['challenge', 'is', 'not', 'complete']));


 //------------------------------------------------Remove Items Using splice()

    //remove the items in the array
let myArray1 = [1,2,3,4]
myArray1.splice(2,2);
//console.log(myArray1)

    //get the value of the spliced items
let mybasty = [1,2,3,4,5,6]
let mybastylab = mybasty.splice(2,3);
//console.log(mybastylab)


 //------------------------------------------------Add Items Using splice()

function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2,"DarkSalmon","BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  //console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

 //------------------------------------------------Copy Array Items Using slice()
  function forecast(arr) {
    return arr.slice(2,4);
  }
 // console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


 //------------------------------------------------Copy an Array with the Spread Operator

  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
      num--;
    }
    return newArr;
  }
  
  //console.log(copyMachine([true, false, true], 2));



   //------------------------------------------------Check For The Presence of an Element With indexOf()
  function quickCheck(arr, elem) {
    if (arr.indexOf(elem) > -1){
      return true
    }else{
      return false
    }
  }
  
  //console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

 //------------------------------------------------Iterate Through All an Array's Items Using For Loops
  function filteredArray(arr, elem) {
    let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) == -1){ 
      newArr.push(arr[i])
    }
  }
    return newArr;
  }
  
  //console.log(filteredArray([[1, 2, 1], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

   //------------------------------------------------Modify an Object Nested Within an Object
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45
  //console.log(userActivity);

   //------------------------------------------------Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem]
  }
  
  //console.log(checkInventory("apples"));

 //------------------------------------------------Use the delete Keyword to Remove Object Properties
  let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  

  delete foods1.oranges;
  delete foods1.plums;
  delete foods1.strawberries ;

  
 // console.log(foods1);


 //------------------------------------------------Check if an Object has a Property

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }
 //console.log(isEveryoneHere(users));

  //------------------------------------------------Modify an Array Stored in an Object

 let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));