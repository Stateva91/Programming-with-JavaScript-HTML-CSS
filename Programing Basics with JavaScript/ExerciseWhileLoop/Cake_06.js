function cake (input){

    let width=Number(input.shift());
    let length=Number(input.shift());

    let  totalPieces=width*length;

    while (totalPieces>=0){
        let line= input.shift();
        if(line==="STOP"){
            break;
        }
        let currentPieces=Number(line);
        totalPieces-=currentPieces;
    }
    if(totalPieces>0){
        console.log(`${totalPieces} pieces are left.`);
    } else{
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }
}