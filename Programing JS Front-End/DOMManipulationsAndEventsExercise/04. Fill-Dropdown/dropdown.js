function addItem() {

    let newItemText=document.getElementById('newItemText');
    let newItemValue=document.getElementById('newItemValue');
    let select=document.getElementById('menu');

    let optionElement=document.createElement('options');
    optionElement.textContent=newItemText.ariaValueMax;//textContent=label
    optionElement.value=newItemValue.value;

    select.appendChild(optionElement);

    newItemText.value='';
    newItemValue.value='';
}