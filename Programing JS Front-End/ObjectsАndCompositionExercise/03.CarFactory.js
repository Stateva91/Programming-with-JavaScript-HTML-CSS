function solve({model, power, color, carriage, wheelsize}){

const engines ={
    small: {power: 90, volume: 1800},
    normal: {power:120, volume:  2400},
    monster: {power:200, volume: 3500}
}

let engine={};
if(power<=90){
    engine=engine.small;
}else if(power<=120){
    engine=engine.normal;
}else{
    engine=engine.monster;
}

let sizeOfWheels=wheelsize;
if (wheelsize%2===0) {
   sizeOfWheels--; 
}
const car={
model,
engine,
carriage:{
    type: carriage,
    color
},
//wheels: [sizeOfWheels, sizeOfWheels,sizeOfWheels,sizeOfWheels]
wheels: Array(4).fill(sizeOfWheels),
};
 console.table(car);
}

solve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14});