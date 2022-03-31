let count = 1;
document.getElementById("radio1").checked = true;

//passando os elementos infinitamente;
setInterval( function(){
   nextImage();
}, 2000)

//função para passar as imagens;
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
}

document.getElementById(`radio${count}`).checked = true; 