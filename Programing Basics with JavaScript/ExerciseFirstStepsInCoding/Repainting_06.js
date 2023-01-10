function Repainting (input){

   let amountOfNylon = Number(input[0]);
   let amountOfFight = Number(input[1]);
   let thinner = Number(input[2]);
   let hours = Number(input[3]);
   let sumNylon = (amountOfNylon + 2) * 1.50;
   let sumFight = (amountOfFight + amountOfFight*0.10) * 14.50;
   let sumThinner = thinner * 5.00;
   let sumBags = 0.40;
   let sumMaterial = sumBags + sumFight+ sumThinner+ sumNylon;
   let sumMaster=(sumMaterial*0.30)*hours;
   let sum=sumMaterial+sumMaster;
       console.log(sum);
}