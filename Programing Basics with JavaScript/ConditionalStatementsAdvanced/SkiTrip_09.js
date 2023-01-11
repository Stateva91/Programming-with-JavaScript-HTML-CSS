function skiTrip (input){

    let daysToStay = Number(input[0]);
    let roomType = input[1];
    let  score = input[2];

    let price = 0;
    let priceDiscount = 0;

    if (roomType ==="room for one person") {
        price = 18.00 * (daysToStay - 1);
        priceDiscount = price;
    } else if (roomType ==="apartment"){
        price = 25.0 *(daysToStay-1);
        if (daysToStay < 10) {
            priceDiscount = price * 0.7;
        } else if (daysToStay <= 15) {
            priceDiscount = price * 0.65;
        } else {
            priceDiscount = price * 0.5;
        }
    } else if (roomType ==="president apartment") {
        price = 35.00*(daysToStay-1);
        if (daysToStay < 10) {
            priceDiscount = price * 0.90;
        } else if (daysToStay <= 15) {
            priceDiscount = price * 0.85;
        } else {
            priceDiscount = price * 0.80;
        }
    }  let totalPrice = 0.00;
        if (score==="positive"){
        totalPrice = priceDiscount + (priceDiscount * 0.25);

    } else if (score==="negative"){
            totalPrice = priceDiscount * 0.9;

    } console.log(`${totalPrice.toFixed(2)}`);
}
