const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("Conf-Password");

let success = true;

form.addEventListener('submit', (e)=>{
    if(!validation()){
        e.preventDefault();
    }
});

function validation(){
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(userNameValue === ''){
        success = false;
        setError(userName, "Username is required");
    }
    else{
        setSuccess(userName);
    }

    if(emailValue === ''){
        success = false;
        setError(email, 'Email is required');
    }
    else if(!validateEmail(emailValue)){
        success = false;
        setError(email, "Please enter a valid E-mail");
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        success = false;
        setError(password, "Password is required");
    }
    else if(passwordValue.length<8){
        success = false;
        setError(password, "Password must be atleast 8 Characters");
    }
    else{
        setSuccess(password);
    }

    if(cPasswordValue === ''){
        success = false;
        setError(cPassword,"Confirm password is required");
    }
    else if(cPasswordValue !== passwordValue){
        success = false;
        setError(cPassword, "Password doesn't match");
    }
    else{
        setSuccess(cPassword);
    }
    return success;
}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());  
};