
buttons = document.querySelectorAll('a');

images = document.getElementsByClassName('project-img');

//Hover effect

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function(event) {   

     event.target.style.color = "white";

    setTimeout(function() {
            event.target.style.color = ""; }, 500); }, false);

}
           

for (let i = 0; i < buttons.length; i++) {

    images[i].addEventListener("mouseover", function(){ 

     //

    })

}
