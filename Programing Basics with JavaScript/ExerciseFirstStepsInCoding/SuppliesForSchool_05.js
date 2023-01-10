function suppliesForSchool (input){

    let pen = Number(input[0]);
    let marker = Number(input[1]);
    let cleans = Number(input[2]);
    let discount = Number(input[3]);
    let pricePen = pen * 5.80;
    let priceMarker = marker * 7.20;
    let priceCleans = cleans * 1.20;
    let priceAll = priceCleans+priceMarker+pricePen;
    let priceDiscount=priceAll-(priceAll* discount/100);
        console.log(priceDiscount);
}