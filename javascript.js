






//get user data
// const butt = document.querySelector("button");

//  butt.addEventListener('click', event => {


//   var dName = document.getElementById("drinkName").value;
//   var ingred = document.getElementById("drinkIngred").value;
//  var process = document.getElementById("drinkProcess").value;


//  });












 
//indexedDb----------------------------------------------
  //changes to db occur using transactions
/*
pattern:
  1 open database
  2 create an object store in database
  3 start transaction to request to operate on db (add, retrieve, etc)
  4 wait for operation to compete - listen to DOM event
  5 do something with results - found on request object
*/
 //using IndexedDb
//    //open database
//  const open = indexedDB.open('drinkDb', 1);
  
//  //create schema
//  //create object store
//  open.onupgradeneeded = () => {
//    var db = open.result;
//    var store = db.createObjectStore("MyDrinkStore", {keyPath: "drinkName"});
//  };

//   //get user input when button is clicked
//  	//var objName = document.getElementById("objName").value;
//  	var dName = document.getElementById("drinkName").value;
//  	var ingred = document.getElementById("drinkIngred").value;
//   var process = document.getElementById("drinkProcess").value;
  

//   open.onsuccess = () => {

//     //start a new transaction
//     var db = open.result;
//     var tx = db.transaction("MyDrinkStore", "readwrite");
//     var store = tx.objectStore("MyDrinkStore");

//     //add some data
//     store.put({drinkName: dName, direct: process, ingredients: ingred});

//     var getDrink = store.get(dName);

//     getDrink.onsuccess = function(){
//       //console.log(getDrink.result.cocktail.direct);
//       alert("Stored!")
//     }
//     //close db
//     //alert('Stored!');
//     tx.oncomplete = function(){
//        db.close();
//      }

//   };
//   });
