function solve(input) {

    let hours=Number(input[0]);
    let day=Number(input[1]);

    if ((day == "Monday" || day == "Tuesday" || day == "Friday"
     || day == "Wednesday" || day == "Thursday" || day == "Saturday") 
     && (hours>=10 && hours<=18)){
        console.log("open");
    
     }else if (day=="Sunday" && (hours>10 )) {
      console.log("closed");
    }
  }