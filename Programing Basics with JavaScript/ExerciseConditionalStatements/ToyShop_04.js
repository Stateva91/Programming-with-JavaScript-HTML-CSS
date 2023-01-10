function toyShop (input){

    let priceExcursion= Number(input[0]);
    let puzzle= Number(input[1]);
    let  dolls=Number(input[2]);
    let bear= Number(input[3]);
    let minions= Number(input[4]);
    let trucks= Number(input[5]);
    let sum=puzzle*2.60+dolls*3+bear*4.10+minions*8.20+ trucks*2;
    let sumToys= puzzle+dolls+bear+minions+trucks;
    let win=0.0;
    let discount=0;
    if (sumToys>=50) {
        discount=sum*0.25;
        //double finalPrice=sum-discount;
        //double rent = finalPrice*0.10;
       // win= finalPrice-rent;
    }
    let finalPrice=sum-discount;
    let rent = finalPrice*0.10;
    win= finalPrice-rent;
    if (win>=priceExcursion) {
        let rest=win-priceExcursion;
       console.log(`Yes! ${rest.toFixed(2)} lv left.`);
    }
    else {
        let nedostik=priceExcursion-win;

        console.log(`Not enough money! ${nedostik.toFixed(2)} lv needed.`);
    }
}