function arrayRotation(array, rotations){

   for(let index=0; index< rotations; index++){
    let firstElement= array.shift();
    array.push(firstElement); 
   }
    
    //arr.pop();
    // arr.unshift(); //add of 0 index
   console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

function arrayRotation(array, rotations){

   let arr=[51, 47, 32, 61, 21];
   
   let secondArr=arr.slice(0);

 }
 
 