function solve(arr){
   let obj={}; // prazen obekt
   for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const calories=arr[index+1];
    if(index%2===0){
        obj[element]= Number(calories);
    }
   }
   console.log(obj);
}


function solve1(arr){
    return arr.reduce((acc, curr, index)=>{
        if(index %2===0) acc[curr]=Number(arr[index+1])
        return acc;
    }, {})
}

solve(["Yoghurt","48", "Rise", "138","Apple", "52"]);