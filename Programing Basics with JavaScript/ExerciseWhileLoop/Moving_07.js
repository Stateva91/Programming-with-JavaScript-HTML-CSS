function moving (input){

    let width=Number(input.shift());
    let length=Number(input.shift());
   let height=Number(input.shift());

    let volume=width*length*height;

    while (volume>0){

        let line= input.shift();
        if(line=="Done"){
            break;
        }
        let boxVolume=Number(line);
        volume-=boxVolume;
    }
    if(volume>0){
        console.log(`${volume} Cubic meters left.`);
    } else{
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
    }
}