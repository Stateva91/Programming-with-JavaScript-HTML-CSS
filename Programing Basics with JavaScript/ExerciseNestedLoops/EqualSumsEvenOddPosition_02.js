function EqualSumsEvenOddPosition (input){

    let firstNumber=Number(input.shift());
    let secondNumber=Number(input.shift());
    let printLine='';
    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber="" + i;
        let evenSum=0;
       let oddSum=0;
        for (let j = 0; j <currentNumber.length ; j++) {
            let digit= Number(currentNumber.charAt(j))
            if(j%2==0){
                evenSum+=digit;
            }else{
                oddSum+=digit;
            }
        }
        if(evenSum===oddSum){
            printLine+=`${i} `;
        }
    }
    console.log(printLine);
}
