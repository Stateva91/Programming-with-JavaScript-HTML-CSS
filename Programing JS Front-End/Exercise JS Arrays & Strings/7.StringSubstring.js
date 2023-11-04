function stringSubstring(word, text){

    let output=`${word} not found!`;
  
    let wordsArray=text.toLowerCase().split(' ');

    for(let i=0; i<word.length; i++){
        let currentWord=wordsArray[i];
        if( currentWord===word){
            output=currentWord;
        }
    }
     console.log(output);

}
stringSubstring('python', 'JavaScript is the best programming language')