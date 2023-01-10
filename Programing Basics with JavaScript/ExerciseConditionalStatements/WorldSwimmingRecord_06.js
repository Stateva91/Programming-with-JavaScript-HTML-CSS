function world (input){
  
    let rekordsek=Number(input[0]);
    let dismeters=Number(input[1]);
    let times=Number(input[2]);
    
    let totaltime=dismeters*times;
    let slow=Math.floor(dismeters/15)*12.5;
    totaltime= totaltime+slow;
    
    if (totaltime<rekordsek){
      
      console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`);
    } else {
      let diff= Math.abs(totaltime-rekordsek);
      console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
  
    
  }