function solve() {
  let input=document.getElementById('input').value;
  let output=document.getElementById('output');

  let sentences=input.split('.').filter(s=>s.length !=0);
  while(sentences.length>0){
    let textForPAragraph=sentences.splice(0,3).join('. ')+'.';//rezha purvite 3 izrecheniq i gi slepvam s .
    let p=document.createElement('p');
    p.textContent=textForPAragraph;
    output.appendChild(p);
  }
}