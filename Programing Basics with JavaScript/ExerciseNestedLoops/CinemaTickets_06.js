function CinemaTickets (input){

    let countKid = 0;
    let countStandard = 0;
    let countStudent = 0;
    let count = 0;

    let movie = input.shift();
    while (movie !="Finish") { // film ili finish
        let freeSeats = Number(input.shift());
        let currentCounter=0; //prodadeni za tekushtiq film

        let line = input.shift();
        while (line !="End") { // vid na bilet ili end
            count++;
            currentCounter++;
            switch (line){
                case"standard":
                    countStandard++;
                    break;
                case "student":
                    countStudent++;
                    break;
                case"kid":
                    countKid++;
                    break;
            }
            if(currentCounter==freeSeats){
                break;
            }

            line = input.shift();
        }
        console.log(`${movie} - ${(currentCounter*1.00/freeSeats*100).toFixed(2)}% full.`);

        movie = input.shift();
    }
    console.log(`Total tickets: ${count}`);
    console.log(`${(countStudent*1.00/count*100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandard*1.00/count*100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKid*1.00/count*100).toFixed(2)}% kids tickets.`);
}
