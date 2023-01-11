function operation (input){
    let number1 =Number(input[0]);
    let number2 = Number(input[1]);
        let  operation =input[2];
 
        switch (operation){
            case '+':
                let sum = number1 + number2;
                if(sum%2 ==0){
                    console.log(`${number1} + ${number2} = ${sum} - even`);
                } else {
                    console.log(`${number1} + ${number2} = ${sum} - odd`);
                }
                break;
            case '-':
                let div = number1 - number2;
                if(div%2 ==0){
                    console.log(`${number1} - ${number2} = ${div} - even`);
                } else {
                    console.log(`${number1} - ${number2} = ${div} - odd`);
               }
                break;
            case '*':
                let product = number1 * number2;
                if(product%2 ==0){
                    console.log(`${number1} * ${number2} = ${product} - even`);
                } else {
                    console.log(`${number1} * ${number2} = ${product} - odd`);
                }
                break;
            case '/':
                if (number2 == 0){
                    console.log(`Cannot divide ${number1} by zero`);
                } else {
                    let division = number1 *1.0/ number2;
                    console.log(`${number1} / ${number2} = ${division.toFixed(2)}`);
                }
                break;
            case '%':
                if (number2 == 0){
                    console.log(`Cannot divide ${number1} by zero`);
                } else {
                    let leftover = number1 % number2;
                    console.log(`${number1} % ${number2} = ${leftover}`);
                }
                break;
        }
    
}