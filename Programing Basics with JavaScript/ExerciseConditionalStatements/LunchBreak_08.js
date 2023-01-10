function lunchBreak (input){

    let serie = input[0];
    let timeSerie = Number(input[1]);
    let timeBreak = Number(input[2]);

    let timeLunch = timeBreak / 8.00;
   let restTime = timeBreak / 4.00;
    let time = timeBreak - (timeLunch +restTime);

    if (time >= timeSerie) {
        console.log(`You have enough time to watch ${serie} and left with ${Math.ceil(time-timeSerie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serie}, you need ${Math.ceil(timeSerie-time)} more minutes.`);
    }
}