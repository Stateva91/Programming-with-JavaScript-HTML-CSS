function date (input){
  
  let f=input[0];
  let l=input[1];
  let agee=Number(input[2]);
  let townn=input[3];;
  console.log(`You are ${f} ${l}, a ${agee}-years old person from ${townn}.`);
}
date(["Ivan", "Ivanov", 15, "Sofia"]);