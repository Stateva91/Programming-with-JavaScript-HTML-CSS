function shopping(input){

    let budget=Number(input[0]);
       let videoCards=Number(input[1]);
        let cpu=Number(input[2]);
        let ram=Number(input[3]);

        let videoCardPrice=videoCards*250;
        let cpuPrice=(videoCardPrice*0.35)*cpu;
        let ramPrice=(videoCardPrice*0.10)*ram;

        let finalPrice=0;

        if (videoCards>cpu){
            finalPrice=(videoCardPrice+cpuPrice+ramPrice)*0.85;
        } else{
            finalPrice=videoCardPrice+cpuPrice+ramPrice;
        }
        if (budget>=finalPrice){
           console.log(`You have ${(budget-finalPrice).toFixed(2)} leva left!`);
        } else {
            console.log(`Not enough money! You need ${(finalPrice-budget).toFixed(2)} leva more!`);
        }
}