function solve(input) {
   

    let message = input.shift();
    let commands= input.shift();
    

    while (commands != 'Buy') {
       let lineArr = commands.split('?');
        let command = lineArr[0];
       


        switch (command) {
            case 'TakeEven':
                let newMessage='';
               for (let index = 0; index < message.length; index++) {
                    if(index % 2 ==0){
                     newMessage+=message[index];
                    }
                  
               }
               message=newMessage;
               
               console.log(message);
                break;
                case 'Reverse':
                    let substring1 = lineArr[1];
                  
                    if(message.includes(substring1)){
                       message=message.replace(substring1, '');
                      let newSubstring= substring1.split('').reverse().join('');
                       message=message+newSubstring;
                       console.log(message);
                    }else{
                       console.log('error');
                    }
                       break;
            case 'ChangeAll':
                let substring = lineArr[1];
                let replacement = lineArr[2];
                if (message.includes(substring)) {
                    while(message.includes(substring)){
                   message= message.replace(substring, replacement);
                  
                }
            }
            console.log(message);
                break;
          
          
        }

        commands = input.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
    
}