function leapYear(year){
    // if((year%4 ===0 && year%100 !=0) || year%400===0){
    //     console.log("yes");
    // }else {
    //     console.log("no");
    // }

    let date=new Date(year, 1, 1);
    date.setMonth(date.getMonth()+1);
    date.setDate(date.getDate()-1);
    console.log(date);
    if(date.getDate()===29){
        console.log("yes");
    }else {
        console.log("no");
    }
}

leapYear(1984);