//This is the module for JavaScript, enjoy!!!!!!!!!!!!!!!!!

//------------------------------------Compare Scopes of the var and let Keywords

function checkScope() {
    let i = 'love scope';
    if (true) {
     let i = 'block scope';
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
editInPlace();

