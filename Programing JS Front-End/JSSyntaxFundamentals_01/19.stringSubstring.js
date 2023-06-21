function stringSubstring(word, text){

    let myWordLowercase=word.toLowerCase();
    let textArr=text.split(' ');

    for (const text of textArr) {
        if(text.toLowerCase()===myWordLowercase){
            return word;
        }
    }
     return `${word} not found!`;
}