window.addEventListener("load", solve);

function solve() {

    const taskListElement=document.getElementById('task-list');
    const doneListElement=document.getElementById('done-list');
    const placeInputElement= document.getElementById('place');
    const actionInputElement= document.getElementById('action');
    const personInputElement= document.getElementById('person');
    const addButtonElement= document.getElementById('add-btn');
    
    const deleteBtn=document.querySelector('.delete');
    
  
    addButtonElement.addEventListener('click', (e)=>{
      e.preventDefault();
    
      if(!placeInputElement.value  || !actionInputElement.value || !personInputElement.value){
        return;
      }
      const liElement=document.createElement('li');
      liElement.className='clean-task';
  
        const articleElement=document.createElement('article');
  
       
        const placeParagraphElement=document.createElement('p');
        placeParagraphElement.textContent=`Place:${placeInputElement.value}`;
  
        const actionParagraphElement=document.createElement('p');
        actionParagraphElement.textContent=`Action:${actionInputElement.value}`;
  
        const personParagraphElement=document.createElement('p');
        personParagraphElement.textContent=`Person:${personInputElement.value}`;
  
        const editButtonElement=document.createElement('button');
        editButtonElement.classList.add('buttons');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent='edit';
  
        const doneButtonElement=document.createElement('button');
        doneButtonElement.classList.add('buttons');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent='done';

        const deleteButtonElement=document.createElement('button');
        deleteButtonElement.classList.add('delete');
        deleteButtonElement.textContent='delete';
        deleteButtonElement.onclick = function() {
            liElement.remove();
          }


  
  
        articleElement.appendChild(placeParagraphElement);
        articleElement.appendChild(actionParagraphElement);
        articleElement.appendChild(personParagraphElement);
  
        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(doneButtonElement);
       // liElement.appendChild(deleteButtonElement)
  
        
      taskListElement.appendChild(liElement);
      clearForm();
      addButtonElement.setAttribute('disabled', true);
      
  
      editButtonElement.addEventListener('click', (e)=>{
        
        const placeName= taskListElement.querySelector('p').textContent;
        const paragraphElements= taskListElement.querySelectorAll('article p');
        
        const [actionPElement, personPElement]=Array.from(paragraphElements);
       
        placeInputElement.value= placeName;
        actionInputElement.value=actionPElement.textContent.split(':')[1];
        personInputElement.value=personPElement.textContent.split(':')[1];
        //deleteBtn.addEventListener('click', onDelete);
        
        taskListElement.innerHTML='';
       
        addButtonElement.removeAttribute('disabled');
      })
      doneButtonElement.addEventListener('click', ()=>{
        
         editButtonElement.remove();
         doneButtonElement.remove();
        
        
     doneListElement.appendChild(liElement);
     liElement.appendChild(deleteButtonElement)
    
  
         taskListElement.innerHTML='';
        
         addButtonElement.removeAttribute('disabled');
      })
    });
  
      function clearForm(){
      placeInputElement.value='';
      actionInputElement.value='';
      personInputElement.value='';
      }
      
  
     }