function FoodDelivery (input){

   let chicken=Number(input[0]);
   let fish=Number(input[1]);
   let vegetarian=Number(input[2]);
   let priceChicken=chicken*10.35;
   let priceFish=fish*12.40;
   let priceVegetarian=vegetarian*8.15;
   let priceMenu=priceFish+ priceChicken+priceVegetarian;
   let desert=priceMenu*20/100;
   let sumPrice= priceMenu+ desert +2.50;
    console.log(sumPrice);
}