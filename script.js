"use strict";


let btnElement = document.getElementById('clicbtn');
btnElement.addEventListener('click', function(){
    alert('მადლობა, თქვენი განაცხადი მიღებულია.')
})

// burgerbar

// let burger = document.getElementById('burger-bar');
// burger.addEventListener('click',function(){
//     burger-bar.classlist.add('sign-activen')

// })
// Get the modal
let modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

