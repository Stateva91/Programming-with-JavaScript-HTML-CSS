function cinema (input){
    let tip=input[0];
   let row=Number(input[1]);
   let colums=Number(input[2]);
   let income=0.0;
   
   if (tip=="Premiere"){
     income=row*colums*12.0;
   } else if (tip=="Normal"){
     income=row*colums*7.50;
   } else if (tip=="Discount"){
     income=row*colums*5.00;
   }
   console.log(`${income.toFixed(2)} leva`);
 }