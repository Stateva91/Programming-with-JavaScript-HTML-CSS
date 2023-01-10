function password (input){
  
    let pass=input[0];
    let  correctPass= "s3cr3t!P@ssw0rd";
     
     if (pass !== correctPass){
       console.log("Wrong password!");
     } else {
       console.log("Welcome");
     }
     
   }