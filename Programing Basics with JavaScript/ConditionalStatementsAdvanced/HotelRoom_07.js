function hotelRoom (input){

    let month = input[0];
    let nightsCnt = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            if (nightsCnt > 7 && nightsCnt <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (nightsCnt > 14) {
                studioPrice = studioPrice * 0.7;
            }
            if (nightsCnt > 14) {
                apartmentPrice = apartmentPrice * 0.9;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (nightsCnt > 14) {
                studioPrice = studioPrice * 0.8;
                apartmentPrice = apartmentPrice * 0.9;
            }
            break;
        case "July":
        case "August":
            apartmentPrice = 77;
            studioPrice = 76;
            if (nightsCnt>14) {
                apartmentPrice = apartmentPrice * 0.9;
            }
            break;
    }
    console.log(`Apartment: ${(apartmentPrice*nightsCnt).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice*nightsCnt).toFixed(2)} lv.`);

}
