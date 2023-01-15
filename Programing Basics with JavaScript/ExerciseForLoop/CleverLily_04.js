function cleverLily(input){

    let age=Number(input[0]);
        let washingMachine= Number(input[1]);
        let toyPrice= Number(input[2]);
        let moneyForBD=0;
        let brother=0;
        let toys=0;
        for (let i = 1; i <=age ; i++) {
            if(i%2==0){
               if(i==2){
                   moneyForBD=10;
               } else{
                   moneyForBD +=10.00*i/2;
               }
               brother++;
            } else{
                toys++;
            }
        }
        let toysMoney=toys*toyPrice;
        let totalMoney=moneyForBD+toysMoney-brother;

        if(washingMachine<=totalMoney){
            console.log(`Yes! ${(totalMoney-washingMachine).toFixed(2)}`);
        } else{
           console.log(`No! ${(washingMachine-totalMoney).toFixed(2)}`);
        }
    }
