function examPreparation (input){

    let countPoorGrades = Number(input.shift());
    let count = 0;
    let totalSumGrade = 0;
    let countProblems=0;
    let lastProblems='';
    let win=false;
    while (count < countPoorGrades) {

        let problemName = input.shift();
        if (problemName==="Enough") {
            win=true;
            break;
        }

        let currentGrade = Number(input.shift());
        if (currentGrade <= 4) {
            count++;
        }
        countProblems++;
        totalSumGrade += currentGrade;
        lastProblems=problemName;

    }
    if (win){
        console.log(`Average score: ${(totalSumGrade/countProblems).toFixed(2)}`, );
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${lastProblems}`);
    } else {
        console.log(`You need a break, ${count} poor grades.`);
    }
}