/*........................ 1 .........................*/
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value != "") {
      records[id][prop] = value;
    } 
    else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
      records[id][prop] = [value];
    }
    else if (prop == "tracks" && value != "") {
      records[id][prop].push(value);
    } 
    else if (value == "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
  
  /*....................... 2 .......................*/
  function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    var check = "Hold";
    if (count < 0) {
      check = "Bet";
    }
  
    return count + " " + check;
  }
  cc(2);
  cc(3);
  cc(7);
  cc("K");
  cc("A");  

/*....................... 3 .......................*/
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product = product*(arr[i][j]);
    }
  }
    // Only change code above this line
    console.log("Product is equal to",product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*....................... 4 .......................*/
arr1 = [1,2,3,4,5,6,7,8];
let n;
function multiply(arr1,n){
   if (n <= 0) {
     return 1;
   }
  else {
     return multiply(arr1,n-1) * arr1[n-1];
   }
}
console.log(multiply(arr1,6))

/*....................... 5 .......................*/
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

/*....................... 6 .......................*/
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0 ; i < contacts.length ; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property"
      }
    }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");  