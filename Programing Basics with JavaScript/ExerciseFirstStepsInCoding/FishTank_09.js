function FishTank(input){
    let Length= Number(input[0]);
        let Width=Number(input[1]);
        let Height=Number(input[2]);
        let Percentage=Number(input[3]);
        let volume=Length*Width*Height;
        let volumeLiter=volume/1000;
        let space=Percentage/100;
        let liters=volumeLiter*(1-space);
        console.log(liters);
}