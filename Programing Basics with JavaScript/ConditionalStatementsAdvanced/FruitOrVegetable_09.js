function fruit (input){

    let name=input[0];
  
    if (name=="banana" || name=="apple" || name=="kiwi" || name=="cherry" || name=="lemon" || name=="grapes"){
      console.log("fruit");
         
    } else if ( name=="tomato" || name=="cucumber" || name=="pepper" || name=="carrot"){
      console.log("vegetable");
    } else {
      console.log("unknown");
    }
  }