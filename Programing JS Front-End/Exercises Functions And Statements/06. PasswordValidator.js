function passwordValidator(password) {

    function isValidLength(text) {
        
        return text.length >= 6 && text.length <= 10;
    }

    function isAlphanumeric(text){

        let regex=/^[a-zA-Z0-9]+$/;
        let isCorrect= regex.test(text);

        return isCorrect;
    }
    
    function checkDigits(text){

        let digitsCounter=0;

        for (const digit of text) {

            if(!isNaN(digit)){
                digitsCounter++;
            }
        }
        return digitsCounter >= 2;
    }

    if(!isValidLength(password)){
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isAlphanumeric(password)){
        console.log('Password must consist only of letters and digits');
    }
    if(!checkDigits(password)){
        console.log('Password must have at least 2 digits');
    }
    if(isAlphanumeric && isValidLength && checkDigits){
        console.log('Password is valid');
    }
}