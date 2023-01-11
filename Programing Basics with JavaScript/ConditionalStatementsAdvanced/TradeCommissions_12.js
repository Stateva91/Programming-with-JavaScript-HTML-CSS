function tradeCommissions (input){

    let city = input[0];
    let sale = Number(input[1]);
    let commission = 0.0;
   
        if (sale >= 0 && sale <= 500) {
            switch (city){
                case "Sofia":
                    commission=sale*0.05;
                    break;
                case "Varna":
                    commission=sale*0.045;
                    break;
                case "Plovdiv":
                    commission=sale*0.055;
                    break;
                default:
                    console.log("error");
                    break;
            }
        } else if (sale > 500 && sale <= 1000) {
            switch (city){
                case "Sofia":
                    commission=sale*0.07;
                    break;
                case "Varna":
                    commission=sale*0.075;
                    break;
                case "Plovdiv":
                    commission=sale*0.08;
                    break;
                default:
                    console.log("error");
                    break;
            }

        } else if (sale > 1000 && sale <= 10000) {
            switch (city){
                case "Sofia":
                    commission=sale*0.08;
                    break;
                case "Varna":
                    commission=sale*0.10;
                    break;
                case "Plovdiv":
                    commission=sale*0.12;
                    break;
                default:
                    console.log("error");
                    break;
            }

        } else if (sale > 10000) {
            switch (city){
                case "Sofia":
                    commission=sale*0.12;
                    break;
                case "Varna":
                    commission=sale*0.13;
                    break;
                case "Plovdiv":
                    commission=sale*0.145;
                    break;
                default:
                    console.log("error");
                    break;
            }

        }else {
            console.log("error");
        }

    //System.out.printf("%.2f", commission);
    if (commission!=0){
        console.log(`${commission.toFixed(2)}`);
    }
}