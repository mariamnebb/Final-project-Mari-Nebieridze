


//  export const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
function validateForm() {
    // Get input field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Check if name is empty
    if (name.trim() === '') {
      alert('Please enter your name');
      return false; // Prevent form submission
    }
    
    // Check if email is empty or not in valid format
    if (email.trim() === '') {
      alert('Please enter your email');
      return false; // Prevent form submission
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return false; // Prevent form submission
    }
    
    // If all validations pass, return true to allow form submission
    return true;
  }
  
  // Function to validate email format
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }