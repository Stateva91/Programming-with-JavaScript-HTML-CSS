function vacation(groupOfPeople, type, day){
    let price=0;
    if(type==="Students"){
        if(day==="Friday"){
         price=groupOfPeople*8.45;
        }else if(day==="Saturday"){
            price=groupOfPeople*9.8;
        }else if(day==="Sunday"){
            price=groupOfPeople*10.46;
           }
           if(groupOfPeople>=30){
            price*=0.85;
           }

    } else  if(type==="Business"){
        let priceForOneTicket=0;
        if(day==="Friday"){
            price=groupOfPeople*10.9;
            priceForOneTicket=10.9;
           }else if(day==="Saturday"){
               price=groupOfPeople*15.6;
               priceForOneTicket=15.6;
           }else if(day==="Sunday"){
               price=groupOfPeople*16;
               priceForOneTicket=16;
              }
              if(groupOfPeople>=100){
                price-=priceForOneTicket*10;
               }

    }else  if(type==="Regular"){
        if(day==="Friday"){
            price=groupOfPeople*15;
           }else if(day==="Saturday"){
               price=groupOfPeople*20;
           }else if(day==="Sunday"){
               price=groupOfPeople*22.5;
            }
            if(groupOfPeople>=10 && groupOfPeople<=20){
                price*=0.95;
               }
    }

        console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students","Sunday");