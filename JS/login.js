// step-1 add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 get the email address inside the email input field 
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3 get password 
    // step-3.1: set id on html element 
    // step-3.2: get the element 
    // step-3.3: get the value from the element 

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    

    // DANGER: DO NOT CHECK/VERIFY email/password on the clint side
    // step-4 verify email and password 
    if(email === 'jakiralam330@gmail.com' && password === 'jakir1166'){
        window.location.href ='index.html';
    }
    else{
        alert('Invalid User or Password')
    }

})







