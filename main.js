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
