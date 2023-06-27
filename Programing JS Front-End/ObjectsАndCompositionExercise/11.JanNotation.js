function solve (arr){
    //const ERROR_MESSAGE= "Error: not enough operands!";
const nums=[];
const operations={
    '+': (a, b)=>a+b,
    '-': (a, b)=>a-b,
    "*": (a, b)=>a*b,
    "/": (a, b)=>a/b,
};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(typeof element ==='number'){ // proverqvame dali edin element e chislo
        nums.push(element);
    }else {
        if(nums.length<2){
            return "Error: not enough operands!";
        }
        nums.push(operations[element](nums.pop(), nums.pop()))
    }
  }
  if(nums.length!=1){
    return "Error: too many operands!";
  }
  return nums[0];
}

console.log(solve([3, 4, '+']));