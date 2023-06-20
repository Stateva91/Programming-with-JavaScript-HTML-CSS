function arrayRotations(numbers, rotations){
    rotations%=numbers.lenght;

    for (let index = 0; index < rotations; index++) {
        let firstNum=numbers.shift();
        numbers.push(firstNum);

        
    }
    console.log(numbers.join(' '));
}