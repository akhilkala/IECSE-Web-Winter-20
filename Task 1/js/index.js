const windowHeight = window.innerHeight;
console.log(windowHeight);
document.getElementById("mainImageArea").style.height = `${windowHeight-150}px`;



document.getElementById('arrowKey').addEventListener('click',()=>{
    window.scrollTo(0,windowHeight);


});