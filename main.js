/*........................1.........................*/
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
  
  
  /*.......................2.......................*/
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

/*.......................3.......................*/
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