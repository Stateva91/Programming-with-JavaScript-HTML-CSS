function solve() {
 
  const placeTx = document.getElementById('place');
  const actionTx = document.getElementById('action');
  const personTx = document.getElementById('person');
  
  const addButton = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  const doneList = document.getElementById('done-list');

  addButton.addEventListener('click', (e) => {
      
      
      const place = placeTx.value;
      const action = actionTx.value;
      const person = personTx.value;

      if (place === '' || action === '' || person === '') {
          return;
      }

      const placeP = document.createElement('p');
      placeP.textContent = `Place:${place}`;

      const actionP = document.createElement('p');
      actionP.textContent = `Action:${action}`;

      const personP = document.createElement('p');
      personP.textContent = `Person:${person}`;

      const articleElement = document.createElement('article');
      articleElement.appendChild(placeP);
      articleElement.appendChild(actionP);
      articleElement.appendChild(personP);


      const buttonElement = document.createElement('button');
      
      const buttonEdit = buttonElement.cloneNode();
      buttonEdit.classList.add('edit');
      buttonEdit.textContent = 'Edit';

      const buttonDone = buttonElement.cloneNode();
      buttonDone.classList.add('done');
      buttonDone.textContent = 'Done';    

      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      buttonsDiv.appendChild (buttonEdit);
      buttonsDiv.appendChild (buttonDone)
      
      const listTaskItem = document.createElement('li');
      listTaskItem.className = 'clean-task';
      listTaskItem.appendChild(articleElement);
      listTaskItem.appendChild(buttonsDiv);
      
      taskList.appendChild(listTaskItem);
      
      placeTx.value = '';
      actionTx.value = '';
      personTx.value = '';
      addButton.disabled = true;

      buttonEdit.addEventListener('click', (e) => {
          placeTx.value = place;
          actionTx.value = action;
          personTx.value = person;

          listTaskItem.remove();
          addButton.disabled = false;
      });

      buttonDone.addEventListener('click', (e) => {
          
          doneList.appendChild(listTaskItem);
          buttonsDiv.remove();
          const deleteBtn = document.createElement ('button');
          deleteBtn.className = 'delete';
          deleteBtn.textContent = 'Delete'; 
          listTaskItem.appendChild (deleteBtn);
          addButton.disabled = false;
          
          deleteBtn.addEventListener('click', (e) => {
              listTaskItem.remove();
          });

      });
  });

}