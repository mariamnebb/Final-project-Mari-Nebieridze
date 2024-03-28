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


let form = document.getElementById("formelement");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;
 

  if (usernameValue.length < 4) {
    errors.username = "ყველა ველი უნდა იყოს შევსებული";
  }

  if (usernameValue == "") {
    errors.username = "ყველა ველი უნდა იყოს შევსებული";
  }

  // password
  let passwordValue1 = document.getElementById("passwordfield").value;
  let passwordValue2 = document.getElementById("passwordfiled2").value;

  if (passwordValue1 == "") {
    errors.passw = "პაროლი არ უნდა იყოს ცარიელი";
  }
  if (passwordValue1 != passwordValue2) {
    errors.passw2 = "პაროლი არ ემთხვევა ერთმანეთს";
  }

  // radio
  let gender = false;
  let radioElements = this.querySelectorAll('[name="gender"]');
  radioElements.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "გთხოვთ აირჩიოთ სქესი";
  }

  //checkbox
  let checkBoxAgree = document.getElementById("checkfield").checked;
  if (!checkBoxAgree) {
    errors.agree = "უნდა დაეთანხმოთ წესებსა და პირობებს";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item); //key

    let errorTextElement = document.getElementById("error_" + item);
    console.log(errorTextElement);

    if (errorTextElement) {
      errorTextElement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});



// show hide password
let passw = document.getElementById("passwordfield");
let icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  if (passw.type == "password") {
    passw.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passw.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

// email regex
let email = document.getElementById("emailfield");

function validation() {
  let emailValue = document.getElementById("emailfield").value;
  let textError = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(emailValue)) {
    textError.textContent = "Your Email is valid";
    textError.style.color = "green";
  } else {
    textError.textContent = "Your Email is invalid";
    textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = " ";
  }
}

email.addEventListener("keyup", validation);