function sumPrimeNonPrime(input) {
    let command = input.shift();
 
    let sumPrime = 0;
    let sumNonPrime = 0;
 
    while (command != "stop") {
        let number = parseInt(command);
        let isPrime = false;
        if (number < 0) {
            console.log(`Number is negative.`);
            command = input.shift();
            continue;
        }
        else if (number == 0 || number == 1) {
            sumNonPrime += number;
            command = input.shift();
            continue;
        }      
        else if (number == 2){
            sumPrime += number;
            command = input.shift();
            continue;
        }  
        for (i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
            else {
                isPrime = true;
            }
        }
        if (isPrime) {
            sumPrime += number;
        }
        else {
            sumNonPrime += number;
        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}