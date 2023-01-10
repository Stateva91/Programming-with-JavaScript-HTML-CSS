function vacationBooksList (input){

    let numberOfPages= Number(input[0]);
    let pages=Number(input[1]);
    let numberOfDates=Number(input[2]);
    let readingTime=numberOfPages/pages;
    let timeOfDay=readingTime/numberOfDates;
        console.log(timeOfDay);

}