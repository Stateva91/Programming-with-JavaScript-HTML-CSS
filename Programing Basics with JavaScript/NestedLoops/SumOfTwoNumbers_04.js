
function sum (input){

    
    let n1=Number(input.shift());
    let n2=Number(input.shift());
    let magicNumber=Number(input.shift());
    let count=0;
    let isFound=false;
        for (let i = n1; i <= n2 ; i++) {
            for (let j = n1; j <=n2 ; j++) {
                count++;
                if(i+j==magicNumber){
                    console.log(`Combination N:${count} (${i} + ${j} = ${i+j})`);
                    
                    isFound=true;
                    break;
                }
            }
            if(isFound){
                break;
            }
        }
        if(!isFound){
            console.log(`${count} combinations - neither equals ${magicNumber}`);
        }
}