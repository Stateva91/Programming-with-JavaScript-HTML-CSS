function time (input){

    let hours=Number(input[0]);
        let minutes=Number(input[1]);
        minutes = minutes+15;
        if (minutes>=60){
            minutes -= 60;
            hours += 1;
            if (hours> 24);
            hours = hours % 24;
        }else if ( hours >=24){
            hours -= 24;
        }
        //System.out.println(hours + ":" +minutes);
        console.log(`${hours}:${minutes}`);
    }
