function vacation (input){


    let needMoney=Number(input.shift());
        let saveMoney=Number(input.shift());
        let countDays=0;
        let spendDays=0;

        while (saveMoney<needMoney){
            if(spendDays==5){
                break;
            }
            let action=input.shift();
            let amount=Number(input.shift());
            countDays++;

            if (action==="save"){
                saveMoney+=amount;
                spendDays=0;
            } else {
                spendDays++;  //kolko dni e harchila
                saveMoney-=amount;
                if(saveMoney<0){
                    saveMoney=0;
                }
            }
        }
        if (spendDays==5){
            console.log("You can't save the money.");
            console.log(countDays);
        }else {
            console.log(`You saved the money for ${countDays} days.`);
        }
}