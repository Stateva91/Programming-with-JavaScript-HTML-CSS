function yardgreening (meters){
  
    let sumdvor= meters[0]*7.61;
    let discount=sumdvor*0.18;
    let sumend=sumdvor-discount;
    console.log(`The final price is: ${sumend} lv.`);
    console.log(`The discount is: ${discount} lv.`);
  }
