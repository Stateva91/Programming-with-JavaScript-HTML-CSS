function subtract() {
    let firstElementValue=document.getElementById('firstNumber').value;
    let secondElementValue=document.getElementById('secondNumber').value; //input pole
    let resultElementValue=document.getElementById('result');
    resultElementValue.textContent=Number(firstElementValue)-Number(secondElementValue); //div element
}