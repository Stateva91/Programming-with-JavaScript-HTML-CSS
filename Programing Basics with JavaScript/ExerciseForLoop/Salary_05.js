function salaty(input) {
        

    let n=Number(input.shift());
    let salary= Number(input.shift());
    

    for (let i =0; i<n; i++){
        let website=input[i];
        switch(website){
            case "Facebook":
                salary-=150;
                break;
            case "Instagram":
                salary-=100;
                break;
            case "Reddit":
                salary-=50;
                break;
           
        }
    }
    if (salary<=0){
    console.log("You have lost your salary.");
      
   } 

    
 if (salary!=0) {
        console.log(salary);
    }
}
