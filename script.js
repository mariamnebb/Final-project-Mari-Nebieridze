"use strict";



import { navcl } from "./burger.js"
import { burgerbar } from "./burger.js"







 let btnElement = document.getElementById('clicbtn');
btnElement.addEventListener('click', function(){
    alert('მადლობა, თქვენი განაცხადი მიღებულია.')
})




// 1. xml http requist
function ajax() {
  let requist = new XMLHttpRequest();
  requist.open("GET", "https://reqres.in/api/users?page=2");

  // წარმატება
  requist.addEventListener("load", function () {
    let response = this.responseText; 
    let responseJs = JSON.parse(response); 
    console.log(responseJs);

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = responseJs.data[1].email;
    ul.appendChild(li);

    document.getElementById("api").appendChild(ul);
  });

  // წარუმატებელი პასუხი
  requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.textContent = "Server Error";

    document.getElementById("api").appendChild(p);
  });
  requist.send();
}

ajax();
// ვალიდაცია

function validateForm() {
    
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  
  // Check if name is empty
  if (name.trim() === '') {
    alert('Please enter your name');
    return false; 
  }
  
 
  if (email.trim() === '') {
    alert('Please enter your email');
    return false; 
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return false; 
  }
  
  // If all validations pass, return true to allow form submission
  return true;
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
// mOVE TO NPm
let moveTo = new MoveTo();
let linkArray = document.querySelectorAll(".atr");


linkArray.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();

  console.log(this); 
  const scrollElement = document.querySelector(this.getAttribute("href"));
  moveTo.move(scrollElement);
}
