function depositCalculator (input){

    let deposit= Number(input[0]);
    let term= Number(input[1]);
    let YearPercentage= Number(input[2]);
    let Percentage= deposit* YearPercentage/100;
    let MountPercentage= Percentage/12;
    let sum= deposit+ term*MountPercentage;
    console.log(sum);

}