function resetForm(){
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value ='';
}


function loadMode(){

    particlesJS.load('particle-js','./particlesjs-config(LIGHT).json',()=>{


    
    })

}

loadMode()


document.getElementById('submitButton').addEventListener('click',(e)=>{
    e.preventDefault();
    const pass1 = document.getElementById('password').value;
    const pass2 = document.getElementById('password2').value;
    alert((pass1 === pass2) ? 'Signed up! Welcome!' : "Passwords don't match! Please enter again")
    resetForm();

})


