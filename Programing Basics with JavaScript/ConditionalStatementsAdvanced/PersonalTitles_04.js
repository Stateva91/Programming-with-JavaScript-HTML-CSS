function personal (input){

    let gender=input[1];
      let age=Number(input[0]);
    if (gender == "f") {
       if (age >= 16) {
    console.log("Ms.");
      } else {
    console.log("Miss");
    }
  }
  else {
    if (age >= 16) {
  console.log("Mr.");
  }else {
  console.log("Master");
  }
  }
  }