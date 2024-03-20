 const butt = document.querySelector("button");

 butt.addEventListener('click', event => {
  
  //get user input when button is clicked
 	var objName = document.getElementById("objName").value;
 	var dName = document.getElementById("drinkName").value;
 	var ingred = document.getElementById("drinkIngred").value;
  var process = document.getElementById("drinkProcess").value;
  
  //open database
  var open = indexedDB.open('drinkDb', 1);
  
  //create schema
  open.onupgradeneeded = () => {
    var db = open.result;
    var store = db.createObjectStore("MyDrinkStore", {keyPath: "drinkName"});
    //use autoincrementing to not have to name object
    //var store = db.createObjectStore("MyDrinkStore",{autoIncrement: true});
  };

  open.onsuccess = () => {

    //start a new transaction
    var db = open.result;
    var tx = db.transaction("MyDrinkStore", "readwrite");
    var store = tx.objectStore("MyDrinkStore");

    //add some data
    store.put({drinkName: objName, cocktail: {name: dName, direct: process, ingredients: ingred}});

    var getDrink = store.get(objName);

    getDrink.onsuccess = function(){
      //console.log(getDrink.result.cocktail.direct);
      alert("Stored!")
    }
    //close db
    tx.oncomplete = function(){
      db.close();
    }

  };
    
    //event.preventDefault();
  });


  //var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  //   // Open (or create) the database
  // var open = indexedDB.open("MyDatabase", 1);
    
  //   // Create the schema
  // open.onupgradeneeded = function() {
  //       var db = open.result;
  //       var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
  //       var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
  //   };
    
  // open.onsuccess = function() {
  //       // Start a new transaction
  //       var db = open.result;
  //       var tx = db.transaction("MyObjectStore", "readwrite");
  //       var store = tx.objectStore("MyObjectStore");
  //       var index = store.index("NameIndex");
    
  //       // Add some data
  //       store.put({id: objName, name: {first: dName, last: ingred}, age: process});
  //       // Query the data
  //       var getDrink = store.get(objName);
      
  //       getDrink.onsuccess = function(){
  //         console.log(getDrink.result.name.last);
  //       }
  //       // Close the db when the transaction is done
  //       tx.oncomplete = function() {
  //           db.close();
  //       };








    // drinkObj.objName = {drinkName: name, 
    //                 drinkIngred: ingred, 
    //                 drinkProcess: process};

    //   console.log(drinkObj)
  //});
  

//indexedDb
  //changes to db occur using transactions
/*
pattern:
  1 open database
  2 create an object store in database
  3 start transaction to request to operate on db (add, retrieve, etc)
  4 wait for operation to compete - listen to DOM event
  5 do something with results - found on request object
*/