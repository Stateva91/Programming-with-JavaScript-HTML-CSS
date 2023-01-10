function BasketballEquipment (input){

   let training=Number(input[0]);
   let priceSneakers= training-(training*40/100);
   let priceOutfit=priceSneakers-(priceSneakers*20/100);
   let priceBall=priceOutfit/4;
   let priceAccessories=priceBall/5;
   let sumPrice=training+priceAccessories+priceOutfit+priceSneakers+priceBall;
    console.log(sumPrice);
}