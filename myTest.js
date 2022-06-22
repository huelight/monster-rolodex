// Filtered Search List
console.log(event.target.value);
const filteredMonsters = 
  this.state.monsters.filter(user=> user.name.startsWith( event.target.value ));
console.log(filteredMonsters); 

// Understanding Includes
const testArray = [1,2,3,4,5,6]
    if ( testArray.includes(0,4) == true ){
        console.log("Array is true");
    } else{
        console.log("Not Found, try again")
    }
