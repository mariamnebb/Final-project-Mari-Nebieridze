


//  export const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
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