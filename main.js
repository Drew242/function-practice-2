function getName(object) {
  for (var key in object) {
    if (key == 'name'){
      console.log(object[key]);
    }
  }
}

function totalLetters(array) {
  var string = array.join("");
  console.log(string.length);
}

function keyValue(key, value) {
  var kvPair = {};
  kvPair[key] = value;
  console.log(kvPair);
}

function negativeIndex(arr, num) {
  var index = arr.length + num;
  console.log(arr[index]);
}

// function removeM(string) {
//   console.log(string.split('m').join(''));
// }
function removeM(string) {
  var arrString = string.split('');
  var newString = [];
  for (i = 0; i < arrString.length; i++) {
    if (arrString[i] == 'M') {
      arrString[i].replace('M', '')
    } else if (arrString[i] == 'm') {
      arrString[i].replace('m', '')
    } else {
      newString.push(arrString[i]);
    }
  }
  console.log(newString.join(''));
}

function printObject(obj) {
  for(var key in obj) {
    console.log(key + " is " + obj[key]);
  }
}

function vowels(string1) {
  var newArray = [];
  var array = string1.split('');
  for (i = 0; i < array.length; i++) {
    if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

function twins(arr) {
  if ((arr.length % 2) != 0) {
    console.log(false);
    return false;
  }
  while (arr.length > 0) {
    if (arr[0] === arr[1]) {
      arr.shift();
      arr.shift();
    } else {
      console.log(false);
      return false;
      break;
    }
  }
  console.log(true);
  return true; 
}


function or() {

}

function unique() {

}


var thing = ({name: "Jack", age: 24})
getName(thing);
var array = ['dog', 'cat', 'burrito'];
totalLetters(array);
var key = 'city';
var value = 'denver';
keyValue(key, value);
var arr = ['a', 'b', 'c', 'd', 'e'];
var num = -2;
negativeIndex(arr, num);
var string = "McNamara";
removeM(string);
var obj = { a: 10, b: 20, c: 30 };
printObject(obj);
var string1 = 'What evil odd ducks!';
vowels(string1);
var array1 = [1, 1, 2, 2, 3, 3];
var array2 = ['a', 'a', 'a'];
var array3 = ['a', 'b', 'b', 'b'];
twins(array1);
twins(array2);
twins(array3);
