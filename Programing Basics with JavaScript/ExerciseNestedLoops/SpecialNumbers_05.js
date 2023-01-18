function SpecialNumbers(input){

    let n=Number(input.shift());
    let printCurrentLine="";
    let result="";

    for (let i = 1; i <=9 ; i++) {
        for (let j = 1; j <=9 ; j++) {
            for (let k = 1; k <=9 ; k++) {
                for (let l = 1; l <=9 ; l++) { // nai vatreshniq shte se izvarti parvo, do 9 drugite sa na 1
                    let specialNumber=n%i==0 && n%j==0 && n%k==0 && n%l==0;
                   if(specialNumber){
                       printCurrentLine+=`${i}${j}${k}${l} `;
                       
                    
                   }
                   
                }
                

            }

        }
        
    }
    console.log(printCurrentLine);

}