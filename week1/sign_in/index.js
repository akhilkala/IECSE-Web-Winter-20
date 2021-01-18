function resetForm(){
    document.getElementById('password').value = '';

    document.getElementById('username').value = '';

}


function loadMode(){

    particlesJS.load('particle-js','./particlesjs-config(DARK).json',()=>{


    
    })

}

loadMode()


document.getElementById('submitButton').addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Signed in!")
    resetForm();

})


