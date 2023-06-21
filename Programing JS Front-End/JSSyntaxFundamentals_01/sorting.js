let numbers=[31,2, 432, 32 , -1];
numbers.sort((aNum, bNum)=>{
    let result=aNum-bNum;
    return result;

});

let sortedDecs=[...numbers].sort((aNum, bNum)=>{
     let result=bNum-aNum;
    return result;
});

let sortedNameAsc=[...names].sort((aName, bName)=>{
    let result=aName.localCompare(bName);
    return result;
});

console.log(result);