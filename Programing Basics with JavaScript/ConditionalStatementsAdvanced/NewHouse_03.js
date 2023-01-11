function newhouse (input){
  
    let flowers= input[0];
    let countFlowers=Number(input[1]);
    let budget=Number(input[2]);

    let price=0;
    let priceFlowersRoses=countFlowers*5.00;
    let priceFlowersDahlias=countFlowers*3.80;
    let priceFlowersTulips=countFlowers*2.80;
    let priceFlowersNarcissus=countFlowers*3.00;
    let priceFlowersGladiolus=countFlowers*2.50;
    if (flowers =="Roses") {
        if (countFlowers > 80) {
            price = priceFlowersRoses * 0.90;
        } else {
            price=priceFlowersRoses;
        }
    }
    else if(flowers =="Dahlias"){
        if(countFlowers>90){
            price=priceFlowersDahlias*0.85;
        } else {
            price=priceFlowersDahlias;
        }
        }
    else if (flowers =="Tulips"){
        if(countFlowers>80){
            price=priceFlowersTulips*0.85;
        }else {
            price=priceFlowersTulips;
        }
    }
    else if (flowers =="Narcissus"){
        if(countFlowers<120){
            price=(priceFlowersNarcissus*0.15)+priceFlowersNarcissus;
        }else {
            price=priceFlowersNarcissus;
        }
    }
    else if (flowers =="Gladiolus"){
        if(countFlowers<80){
            price=(priceFlowersGladiolus*0.20)+priceFlowersGladiolus;
        }else {
            price=priceFlowersGladiolus;
        }
    }
    if (budget>=price){
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowers} and ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price-budget).toFixed(2)} leva more.`);
    }

  }