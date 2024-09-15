
//selectors
const todoButton=document.querySelector('.todo-button');
const TodoInput=document.querySelector('.todo-input');
const todoList=document.querySelector('.todo-list');

//event list
todoButton.addEventListener("click", addTask)

//event complete and trush
todoList.addEventListener('click',chekorDlete)

function addTask(e){
    e.preventDefault();
    
  //creat li 
 const todoLi=document.createElement('li')
      todoLi.classList.add('todo');

  //creat div 
   const myDiv=document.createElement('div');
   myDiv.classList.add("todo-item");

  //creat input value to div 
  myDiv.innerHTML=TodoInput.value
 
  localStorage.setItem("todo", TodoInput.value);



  //creat ptn complete 
  const completeBtn=document.createElement('button');
     completeBtn.classList.add('complete-btn');
     completeBtn.innerHTML='<i class="fa-solid fa-check"></i>'
 
  //creat trash btn 
  const  trushBtn=document.createElement('button');
     trushBtn.classList.add('trash-btn');
     trushBtn.innerHTML='<i class="fa-solid fa-trash"></i>';

  // add div btn1+ btn2 =>li
  todoLi.append(myDiv,completeBtn,trushBtn);
  
   //creat ul todo list
   todoList.appendChild(todoLi);
 
      //creat todo-container 
   const todoContainer=document.createElement('div');
        todoContainer.classList.add('todo-container')
   todoContainer.appendChild(todoList);

   // apend container to body 
   document.body.append(todoContainer)
   TodoInput.value="";
    
};
 
function chekorDlete(e){
 const item=e.target;
 if(item.classList[0]==="complete-btn"){
   item.parentElement.classList.toggle('complete');
  
 };

 if(item.classList[0]=== "trash-btn"){
    item.parentElement.classList.add("fall");
    const todo= item.parentElement;
     todo.addEventListener("transitionend",()=>{
        todo.remove();
     })
};
   };









































