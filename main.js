const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Password Toggle 
function togglePassword() {
  var x = document.getElementById('password');
if (x.type === "password"){
  x.type = 'text';
}else{
  x.type ='password';
 }
}

function togglePassword2() {
  var x = document.getElementById('password2');
if (x.type === "password"){
  x.type = 'text';
}else{
  x.type ='password';
 }
}


form.addEventListener('submit', (e) =>
{
  e.preventDefault()

  validateInputs();
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}


const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}


/*const isValidEmail = email =>{
  const re = /^(([^<>()[\]\\.,;:/s@"]+(\.[^<>()[\]\\.,;:/s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+/.)+[a-zA-Z]{2,}))$/;
  return 
  re.test(String(email).toLowerCase());
}*/
const isValidEmail = email => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
 const usernameValue = username.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 const password2Value = password2.value.trim();



if(usernameValue === ''){
 setError(username, 'Username is required')
}else{
  setSuccess(username,'')
}


if(emailValue  === ''){
 setError(email, 'Email is required!!!')
}else if (!isValidEmail(emailValue)) {
  setError(email, 'Please provide a valid email address')
}else{
  setSuccess(email,'')
}


if(passwordValue  === ''){
 setError(password, 'Password is required')
} else if (passwordValue.length < 8) {
  setError(password, 'Password must be greater than 8 characters')
}else{
  setSuccess(password,'')
};





if(password2Value  === ''){
 setError(password2, 'Please confirm your password')
} else if (password2Value !== passwordValue){
  setError(password2, 'Password does not match')
}else{
  setSuccess(password2,'')
}}