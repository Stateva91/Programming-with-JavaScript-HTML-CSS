function modernTimes(text){
  let words=text.split(' ')
  .filter((word)=>word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word));

  let result=[];
  for (const word of words) {
       result.push(word.slice(1));
  }
  console.log(result.join('\n'));

  function checkIfWordIsValid(myWord){
    let myWordLowercase=myWord.toLowerCase().slice(1); // vzima ot 1 index natatak
    let isValid=true;

   for (const symbol of myWordLowercase) {
    let asciiCode=symbol.charCodeAt(0);
    if(!(asciiCode>=97 && asciiCode<=122)){
        isValid=false;
        break;
    }
   }
   return isValid;
  }
}