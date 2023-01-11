function solve(input) {

    let price = 0;
      let productName=input[0];
      let town=input[1];
    
   let  quantity = Number(input[2]);
    
    if (town == "Sofia") {
    
    if (productName == "coffee") {
    
    price = quantity * 0.50;
    
    } else if (productName == "water") {
    
    price = quantity * 0.80;
    
    }else if (productName == "beer") {
    
    price = quantity * 1.20;
    
    }else if (productName == "sweets") {
    
    price = quantity * 1.45;
    
    } else if (productName == "peanuts") {
    
    price = quantity * 1.60;
    
    }
    
    }
    
    else if (town == "Plovdiv"){
      if (productName == "coffee") {
    
    price = quantity * 0.40;
    
    } else if (productName == "water") {
    
    price = quantity * 0.70;
    
    }else if (productName == "beer") {
    
    price = quantity * 1.15;
    
    }else if (productName == "sweets") {
    
    price = quantity * 1.30;
    
    } else if (productName == "peanuts") {
    
    price = quantity * 1.50;
    
    }
      
    }
    
    else if (town == "Varna"){
       if (productName == "coffee") {
    
    price = quantity * 0.45;
    
    } else if (productName == "water") {
    
    price = quantity * 0.70;
    
    }else if (productName == "beer") {
    
    price = quantity * 1.10;
    
    }else if (productName == "sweets") {
    
    price = quantity * 1.35;
    
    } else if (productName == "peanuts") {
    
    price = quantity * 1.55;
    
    }
      
    }

    console.log(price);
    }