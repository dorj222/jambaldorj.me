
buttons = document.getElementsByClassName('selectBtn');



//Hover effect

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function(event) {   

     event.target.style.color = "white";

    setTimeout(function() {
            event.target.style.color = ""; }, 500); }, false);

}
           
