function traveling (input){

    let destination=input.shift();

        while (destination!=="End"){
            let budget=Number(input.shift());
            let sum=0;
            while(sum<budget){
                let currentSum=Number(input.shift());
                sum+=currentSum;

            }
            console.log(`Going to ${destination}!`);
            destination= input.shift();
        }
}