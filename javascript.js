
const obj = {};
const arr = [];
const drinkArr = [];


function getUserInput(){
	var objName = document.getElementById("objName").value;
	var name = document.getElementById("drinkName").value;
	var ingred = document.getElementById("drinkIngred").value;
    var process = document.getElementById("drinkProcess").value;
  
    obj.objName = { drinkName: name, 
                    drinkIngred: ingred, 
                    drinkProcess: process};

    console.log(obj.objName.drinkName);
  }
  

  
 












//---------------------------------geolocator--------
// const click = document.querySelector("button")

// click.addEventListener("click",()=>{
//     function success(x){
//         const y = x.coords;
//         document.write(y.longitude);
//     }
//     navigator.geolocation.getCurrentPosition(success);
// });