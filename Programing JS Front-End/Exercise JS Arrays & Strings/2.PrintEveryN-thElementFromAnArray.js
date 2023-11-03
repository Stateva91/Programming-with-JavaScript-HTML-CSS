function printEveryN(array, step){

    let output=[];
    let arrayLength=array.length;

    for(let index=0; index<arrayLength; index+=step){
      let currentNumber=array[index];
      output.push(currentNumber);
    }
    return output;
}

printEveryN(['5','20','31','4','20'],2);