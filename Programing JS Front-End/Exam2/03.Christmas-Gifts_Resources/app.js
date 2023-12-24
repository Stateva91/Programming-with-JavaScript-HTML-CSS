const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadGiftsButton = document.getElementById('load-presents');
const giftsList = document.getElementById('gift-list');
const formElement=document.querySelector('#form form');
const giftInput=document.getElementById('gift');
const forInput=document.getElementById('for');
const priceInput=document.getElementById('price');
const formAddButton=document.getElementById('add-present');
const formEditButton=document.getElementById('edit-present');


loadGiftsButton.addEventListener('click', loadGift);

formAddButton.addEventListener('click', (e)=>{
    e.preventDefault();

    //get data from inputs
    const newGift={
        gift: giftInput.value,
        forName: forInput.value,
        price: priceInput.value,
    };
    //send post request to server
     fetch(baseUrl, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGift)
     })
     .then(loadGift)
     
    
    clearForm();
    

})
formEditButton.addEventListener('click', (e)=>{
    e.preventDefault();

    const giftId=formElement.dataset.newGift;

    // get data
    const giftData={
        _id: formElement.dataset.newGift,
        gift: giftInput.value,
        forName: forInput.value,
        price: priceInput.value,
    };
    //put request
    fetch(`${baseUrl}/${giftId}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(giftData)
    })
    .then(loadGift)
   
    .then(()=>{
       formAddButton.removeAttribute('disabled');
       formEditButton.setAttribute('disabled', 'disabled');
    
       clearForm();

       delete formElement.dataset.newGift;
    
    })
  


})
function clearForm (){
    giftInput.value='';
    forInput.value='';
    priceInput.value='';
}
function loadGift(){
    return fetch(baseUrl)
    .then(res => res.json())
    .then(result => {
        renderGifts(Object.values(result));
    });
}

function renderGifts(gifts){
    giftsList.innerHTML='';
    gifts
    .map(renderGift)
    .forEach(giftElement=>giftsList.appendChild(giftElement));

}

function renderGift(newGift){


    const container=document.createElement('div');
    container.className='content';

    const giftElement=document.createElement('p');
    giftElement.textContent=newGift.gift;

    const nameElement=document.createElement('p');
    nameElement.textContent=newGift.price;

    const priceElement=document.createElement('p');
    priceElement.textContent=newGift.forName;

    const changeButton=document.createElement('button');
    changeButton.className='change-btn';
    changeButton.textContent='Change';
    changeButton.addEventListener('click', ()=>{

        //add to form  fields
    giftInput.value=newGift.gift;
    forInput.value=newGift.forName;
    priceInput.value=newGift.price;
      //remove from confirmed list
      container.remove();
        //Activate edit newGift button
        formEditButton.removeAttribute('disabled');

        //deactivate add newGift button
       formAddButton.setAttribute('disabled', 'disabled');

       //save newGift id
       formElement.dataset.newGift=newGift._id;
    })

    const deleteButton=document.createElement('button');
    deleteButton.className='delete-btn';
    deleteButton.textContent='Delete';
    deleteButton.addEventListener('click', ()=>{
       //send delete request
       fetch(`${baseUrl}/${newGift._id}`,{
       method: 'DELETE',
    })
    .then(loadGift);
       //load newGift
    })

    container.appendChild(giftElement);
    container.appendChild(nameElement);
    container.appendChild(priceElement);
    container.appendChild(changeButton);
    container.appendChild(deleteButton);

    return container;
}