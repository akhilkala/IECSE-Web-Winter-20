let allTasks = localStorage.getItem('allTasks');
let allTasksDeleteButtons = document.getElementsByClassName('delete-buttons');
let allTasksEditButtons = document.getElementsByClassName('edit-buttons');

class Task{
    constructor(title,desc,complete){
        this.title = title;
        this.desc = desc;
        this.complete = complete;
    }





}



const newTaskTemplate = `
    <div class="card">
<div class="new-task-container">
                <h3>Title</h3>
                <input class="task-edit-inputs" type="text" id="new-heading" placeholder="Enter title">
                <h3>Description</h3>
                 <textarea name="desc" id="new-desc" class="task-edit-inputs" cols="10" rows="10">
                 
</textarea>
    <div class="completed-input">
          <h3 class="complete-right">Completed</h3>
            <input type="checkbox" id="new-complete" class="complete-left">
</div>
      
                
                
  
           <div class="button-area">
            <button class="task-edit-button" id="add-new-task">
 Add
</button>
<button id="cancel-new-task" class="task-edit-button">
Cancel

</button>
</div>
           
                
            </div>
            
        </div>
`;









if (!allTasks){
    allTasks = [];
}else{
    allTasks = JSON.parse(allTasks);

}


function addEventListeners(){


    for (let deleteButton of allTasksDeleteButtons){
        deleteButton.addEventListener('click', (e)=>{
            const id = parseInt(e.target.id.substr(deleteKey.length));
            if (confirm("Are you sure you want to delete this task?")){
                allTasks.splice(id,1);
                updateTasks();


            }

        });



    }

    for (let editButton of allTasksEditButtons){
        editButton.addEventListener('click',(e)=>{
            const id = parseInt(e.target.id.substr(editKey.length));
            editTasks(id);


        });



    }
}







function addTask(){
    document.getElementById('add-task').style.display = 'none';
    document.getElementById('all-tasks').innerHTML = newTaskTemplate ;
    document.getElementById('add-new-task').addEventListener('click',()=>{
        const newTitle = document.getElementById('new-heading').value;
        const newDesc = document.getElementById('new-desc').value;
        const completed=  document.getElementById('new-complete').checked;
        let newTask = new Task(newTitle,newDesc,(completed));


        allTasks.push(newTask);
        document.getElementById('add-task').style.display = 'initial';
        updateTasks();

    });

    document.getElementById('cancel-new-task').addEventListener('click',()=>{

        document.getElementById('add-task').style.display = 'initial';
        updateTasks();

    })



}

function validateString(string){
    return !(string.trim().length === 0);
}

function editTasks(index){
    const taskToEdit = allTasks[index];
    document.getElementById('all-tasks').innerHTML = newTaskTemplate;

    //changing the initial values while editing;
    document.getElementById('new-heading').value = taskToEdit.title;
    document.getElementById('new-desc').value = taskToEdit.desc;
    document.getElementById('new-complete').checked = taskToEdit.complete;
    document.getElementById('add-new-task').innerHTML = 'Edit';
    document.getElementById('add-new-task').addEventListener('click',()=>{
       const newTitle = document.getElementById('new-heading').value;
       const newDesc = document.getElementById('new-desc').value;
       const newComplete = document.getElementById('new-complete').checked;
       if (!validateString(newTitle) || !validateString(newDesc)){
           alert("Invalid inputs!");
           editTasks(index);
       }
       allTasks[index].title = newTitle;
       allTasks[index].desc = newDesc;
       allTasks[index].complete = newComplete;
       updateTasks();




    });


    document.getElementById('cancel-new-task').addEventListener('click',()=>{
        updateTasks();


    })




}



function updateTasks(){
    document.getElementById('all-tasks').innerHTML = '';
    if (allTasks.length === 0){
        document.getElementById('all-tasks').innerHTML += `
            <h1>
            No Tasks!
</h1>   
        
        `;


    }else{

        for (let i=0;i<allTasks.length;i++){
            let task = allTasks[i];
            document.getElementById('all-tasks').innerHTML += `
            <div class="card">

            <div class="container">
                <h4><b>${task.title}</b></h4>
                
                <p>${task.desc}</p>
                <p> 
                Completed : ${task.complete ? 'Yes':'No'}
                
                
            </p>
            <button class="edit-buttons" id="edit-${i}">
                Edit
</button>
<button id="delete-${i}" class="delete-buttons">
Delete
</button>
                
            </div>
            
        </div>
    
    
    `;
        }




    }
    allTasksDeleteButtons = document.getElementsByClassName('delete-buttons');
    allTasksEditButtons= document.getElementsByClassName('edit-buttons');


    localStorage.setItem('allTasks',JSON.stringify(allTasks));

    addEventListeners();



}

updateTasks();




function changeToLight(){
    document.getElementById('mainStylesheet').href = 'css/styles(LIGHT).css';
    document.getElementById('themeHeading').style.color = 'black';
    localStorage.setItem('currentTheme','LIGHT');

}

function changeToDark(){


    document.getElementById('mainStylesheet').href = 'css/styles(DARK).css';
    document.getElementById('themeHeading').style.color = 'white';
    localStorage.setItem('currentTheme','DARK');


}

function changeToRed(){
    document.getElementById('mainStylesheet').href = 'css/styles(RED).css';
    document.getElementById('themeHeading').style.color = 'white';
    localStorage.setItem('currentTheme','RED');
}
function changeToViolet(){
    document.getElementById('mainStylesheet').href = 'css/styles(VIOLET).css';
    document.getElementById('themeHeading').style.color = 'white';
    localStorage.setItem('currentTheme','VIOLET');
}

let currentTheme = localStorage.getItem('currentTheme');

if (currentTheme === null){
    currentTheme = 'LIGHT';
}

if (currentTheme === 'LIGHT'){
    changeToLight();

}else if (currentTheme === 'DARK'){
    changeToDark();

} else if (currentTheme === 'RED'){
    changeToRed()
} else if (currentTheme === 'VIOLET'){
    changeToViolet();
}



document.getElementById('light').addEventListener('click', changeToLight);

document.getElementById('dark').addEventListener('click', changeToDark);
document.getElementById('red').addEventListener('click', changeToRed);
document.getElementById('violet').addEventListener('click', changeToViolet);

document.getElementById('add-task').addEventListener('click',addTask);



const deleteKey = 'delete-';
const editKey = 'edit-';


addEventListeners();