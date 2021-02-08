

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list= document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "checkcircle";
const UNCHECK = "circlethin";
const LINE_THROUGH = "linethrough";

let LIST,id;

let data = localStorage.getItem("toDo");
    if(data){
        LIST=JSON.parse(data);
        loadToDo(LIST);
        id = LIST.length;
    }else{
        LIST[]
        id = 0;
    }

    function loadToDo(array){
        array.forEach(function(item){
            addToDo(item.name,item.id,item.done,item.trash);
        });
    }

    clear.addEventListener('click',function(){
        localStorage.clear();
        location.reload();
    
    });


const options = {weekday: 'long', month:'short', day:'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocalDateString("en-US",options);

function addToDo(toDo,id,done,trash){
    if(trash){return;}

const DONE = done ? CHECK :UNCHECK;
const LINE = done ? LINE_THROUGH:"";


    const item = `<li class="item">
    <i class="circlethin ${DONE}" job="complete" id="${id}" ></i>
    <p class="text ${LINE}"> ${toDo} </p>
    <i class="trash" job="delete" id="${id}"></i>
</li> 
`;

const position = "beforeend";

list.insertAdjacentHTML(position,text);
}

document.addEventListener("keyup",function(event){
    if(event.keycode == 13){
        const toDo = input.value;

       if(toDo){
           addToDo(toDo,id,false,false);
           LIST.push(
               {
                   name: toDo,
                   id : id,
                   done : false,
                   trash : false
               }
           );
           id++;  
       }
       input.value = "";
       
   }
});

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
   }

   function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// const list = document.getElementById("list");
list.addEventListener("click",function(event){
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;
    if(elementJOB == "complete"){
        completeToDo(element);
    }else if(elementJOB == "delete"){
        removeToDo(element);
    }
    localStorage.setItem('key','value');
    let variable = localStorage.getItem('key');
    localStorage.setItem("toDo",JSON.stringify(LIST));

});





 

    
    
   
    

  

