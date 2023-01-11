function summer (input){
    let degrees=Number(input[0]);
    let timeofday=input[1];
    let outfit;
   let shoes;
   if (degrees>=10 && degrees<=18){
     if (timeofday ==="Morning"){
       outfit="Sweatshirt";
         shoes="Sneakers";
     } else if (timeofday =="Afternoon" || timeofday=="Evening"){
       outfit="Shirt";
         shoes="Moccasins";
     }
    }
     else if (degrees>18 && degrees<=24){
     if (timeofday ==="Afternoon"){
       outfit="T-Shirt";
         shoes="Sandals";
     } else if (timeofday =="Morning" || timeofday=="Evening"){
       outfit="Shirt";
         shoes="Moccasins";
     }
    }
       else if ( degrees>=25){
     if (timeofday =="Morning"){
       outfit="T-Shirt";
         shoes="Sandals";
     } else if (timeofday =="Afternoon"){
       outfit="Swim Suit";
         shoes="Barefoot";
     } else if (timeofday=="Evening"){
       outfit="Shirt";
         shoes="Moccasins";
     }
   }
   console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
 }