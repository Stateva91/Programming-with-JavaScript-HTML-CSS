function building(input){

    let floors=Number(input.shift());
    let rooms=Number(input.shift());

    for (let i = floors; i >= 1; i--) {
         let floorString="";
        for (let j = 0; j < rooms; j++) {
            if(i==floors){
                floorString += "L" + i + j + " ";
            } else if (i % 2 == 0) {
                floorString += "O" + i + j + " ";
            } else {
                floorString += "A" + i + j + " ";
            }
            
        }
        console.log(floorString); //smqna na etaja
    }
}