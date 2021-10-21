var myArray = [['suzuki',2]['yamaha',3]]

// three ^

var MyArray = [
    ['suzkuki',2], ['yamaha',3], ['honda', 4]
];

for (var x=0; x < myArr.length; x++) {
    for (var y=0; y < myArr[x].length; y++) {
      console.log(myArr[x][y]);
    }
  }

  // four ^

  var myMotorcycleDealership = [[['suzuki',2], ['yamaha',3], [['honda',4], ['indian',5]], ['ducati', 6]]]

  //five ^

  function myChange(a,b) {
    if ( a > b ){ 
      return a;
    } else {
        return b;
    }
}
console.log(myChange(10,20))

//six ^

function myParts(a,b) {
    if ( a == b ){ 
      return 'equal';
    } else {
        return 'different';
    }
}
console.log(myParts(15,15))
console.log(myParts(25,35))