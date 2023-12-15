const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsButton = document.getElementById('load-vacations');
const vacationList = document.getElementById('list');
const formElement=document.querySelector('#form form');
const nameInput=document.getElementById('name');
const numDaysInput=document.getElementById('num-days');
const fromDateInput=document.getElementById('from-date');
const formAddButton=document.getElementById('add-vacation');
const formEditButton=document.getElementById('edit-vacation');


loadVacationsButton.addEventListener('click', loadVacations);

formAddButton.addEventListener('click', (e)=>{
    e.preventDefault();

    //get data from inputs
    const newVacation={
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value,
    };
    //send post request to server
     fetch(baseUrl, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVacation)
     })
     .then(loadVacations)
     
    //get vacations
    clearForm();
    //clear inputs

})
formEditButton.addEventListener('click', (e)=>{
    e.preventDefault();

    const vacationId=formElement.dataset.vacation;

    // get data
    const vacationData={
        _id: formElement.dataset.vacation,
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value,
    };
    //put request
    fetch(`${baseUrl}/${vacationId}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(vacationData)
    })
    .then(loadVacations)
    .then(()=>{
       formAddButton.removeAttribute('disabled');
       formEditButton.setAttribute('disabled', 'disabled');
    
       clearForm();

       delete formElement.dataset.vacation;
    
    })
    //get vacations 
    // deactivate edit button

    //activate add button


})
function clearForm (){
    nameInput.value='';
    numDaysInput.value='';
    fromDateInput.value='';
}
function loadVacations(){
    return fetch(baseUrl)
    .then(res => res.json())
    .then(result => {
        renderVacations(Object.values(result));
    });
}

function renderVacations(vacations){
    vacationList.innerHTML='';
    vacations
    .map(renderVacation)
    .forEach(vacationElement=>vacationList.appendChild(vacationElement));

}

function renderVacation(vacation){
{/* <div class="container">
                        <h2>Carren Davis</h2>
                        <h3>2023-06-09</h3>
                        <h3>5</h3>
                        <button class="change-btn">Change</button>
                        <button class="done-btn">Done</button>
                    </div> */}

    const container=document.createElement('div');
    container.className='container';

    const h2Element=document.createElement('h2');
    h2Element.textContent=vacation.name;

    const h3DateElement=document.createElement('h3');
    h3DateElement.textContent=vacation.date;

    const h3DaysElement=document.createElement('h3');
    h3DaysElement.textContent=vacation.days;

    const changeButton=document.createElement('button');
    changeButton.className='change-btn';
    changeButton.textContent='Change';
    changeButton.addEventListener('click', ()=>{

        //add to form  fields
    nameInput.value=vacation.name;
    numDaysInput.value=vacation.days;
    fromDateInput.value=vacation.date;
      //remove from confirmed list
      container.remove();
        //Activate edit vacation button
        formEditButton.removeAttribute('disabled');

        //deactivate add vacation button
       formAddButton.setAttribute('disabled', 'disabled');

       //save vacation id
       formElement.dataset.vacation=vacation._id;
    })

    const doneButton=document.createElement('button');
    doneButton.className='done-btn';
    doneButton.textContent='Done';
    doneButton.addEventListener('click', ()=>{
       //send delete request
       fetch(`${baseUrl}/${vacation._id}`,{
       method: 'DELETE',
    })
    .then(loadVacations);
       //load vacation
    })

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3DaysElement);
    container.appendChild(changeButton);
    container.appendChild(doneButton);

    return container;
}