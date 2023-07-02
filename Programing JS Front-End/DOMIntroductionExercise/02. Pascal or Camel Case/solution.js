function solve() {
  let text=document.getElementById('text').value;
  let namingConvention=document.getElementById('naming-convention').value;
  let result='';

  let words=text.split(/(\s+)/).filter(x=>x!=' ');

  if(namingConvention=='Camel Case'){
   for (let index = 0; index < words.length; index++) {
    words[index]=words[index].toLowerCase();

    //index=0 ? lowecase
    //capitalLetter
    if(index!=0){
      words[index]=words[index].charAt(0).toUpperCase()+ words[index].substring(1);
    }
    
   }
  } else if (namingConvention=='Pascal Case'){
    for (let index = 0; index < words.length; index++) {
      words[index]=words[index].toLowerCase();
      words[index]=words[index].charAt(0).toUpperCase()+ words[index].substring(1);;
    }

  }else {
    return document.getElementById('result').textContent='Error!';
  }
  result=words.join(''); //masiva ot dumi go slepqm
  document.getElementById('result').textContent=result;
}