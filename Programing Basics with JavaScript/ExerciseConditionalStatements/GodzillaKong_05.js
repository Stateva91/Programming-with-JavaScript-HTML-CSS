function godzillaKong (input){
    let budget=Number(input[0]);
    let extras= Number(input[1]);
    let priceClothing=Number(input[2]);
    let decor=budget*0.10;
    let sumClothing=priceClothing*extras;

    if (extras>150) {
        sumClothing=sumClothing*0.90;
    }
    let totalprice=decor+sumClothing;
    //double rest= budget-sumFilm;
    let needmoney=Math.abs(totalprice-budget);
    if (totalprice>budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${needmoney.toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${needmoney.toFixed(2)} leva left.`);
    }
}