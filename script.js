const see=document.querySelector('.see');
const pass=document.querySelector('.pass');
const signIn=document.querySelector('.login-box-footer p');

see.addEventListener('click',()=>{
  if(see.classList.contains('fa-eye-slash')){
    see.classList.remove('fa-eye-slash')
    see.classList.add('fa-eye')
    pass.type='text'
  }else{
    see.classList.remove('fa-eye')
    see.classList.add('fa-eye-slash')
    pass.type='password'
  }
})

signIn.addEventListener('click',()=>{
  signIn.style.textDecoration='underline';
})

// Login form validation
const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const username = document.getElementById("username");
const username2 = document.getElementById("username2");
const email = document.getElementById("email");
const email2 = document.getElementById("email2");
const phone = document.getElementById("phone");
const phone2 = document.getElementById("phone2");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const cpassword = document.getElementById("cpassword");
const cpassword2 = document.getElementById("cpassword2");
let successCount = 0;
let successCount2 = 0;

// adding eventlistener to the form
form.addEventListener("submit", (e) => {
  successCount = 0
  validate();
  if(isValid()===5){
    form.submit()
  }
  else{
    e.preventDefault();
  }
});

// landlord form submission
form2.addEventListener("submit", (e) => {
  successCount2 = 0
  validate2();
  if(isValid2()===5){
    form2.submit()
  }
  else{
    e.preventDefault();
  }
});


// validity function definition
function isValid() {
  let textBoxes = document.querySelectorAll(".text-box");

  textBoxes.forEach((textBox) => {
    if (textBox.classList.contains("success")) {
      successCount++;
    }
  });
  return successCount;
}
// validity  function definition
function isValid2() {
  let textBoxes2 = document.querySelectorAll(".text-box-4");

  textBoxes2.forEach((textBox) => {
    if (textBox.classList.contains("success")) {
      successCount2++;
    }
  });
  return successCount2;
}

// validating email more precisely
function isEmail(emailVal) {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 2) {
    return false;
  }
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }
  if (dot === emailVal.length - 1) {
    return false;
  }
  return true;
}
// landlord email validation
function isEmail2(emailVal) {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 2) {
    return false;
  }
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }
  if (dot === emailVal.length - 1) {
    return false;
  }
  return true;
}

// defining the validate function in order to validate thye input fields entered by the user
function validate() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //   validating username
  if (usernameVal === "") {
    setErrorMsg(username, "Name cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Name must contain atleat 3 characters");
  }else {
    setSuccessMsg(username);
  }

  //   validating email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } 
  else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
  } 
  else {
    setSuccessMsg(email);
  }
  

  //   validating phone
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone Number cannot be blank");
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, "Not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }

  //   validating password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Minimum 6 characters");
  } else {
    setSuccessMsg(password);
  }

  //   validating Confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "You must confirm your Password");
  } else if (cpasswordVal !== passwordVal) {
    setErrorMsg(cpassword, "Please enter the password same as above");
  } else {
    setSuccessMsg(cpassword);
  } 
}
function validate2() {
  const usernameVal2 = username2.value.trim();
  const emailVal2 = email2.value.trim();
  const phoneVal2 = phone2.value.trim();
  const passwordVal2 = password2.value.trim();
  const cpasswordVal2 = cpassword2.value.trim();

  //   validating username
  if (usernameVal2 === "") {
    setErrorMsg(username2, "Name cannot be blank");
  } else if (usernameVal2.length <= 2) {
    setErrorMsg(username2, "Name must contain atleat 3 characters");
  }else {
    setSuccessMsg(username2);
  }

  //   validating email
  if (emailVal2 === "") {
    setErrorMsg(email2, "Email cannot be blank");
  } 
  else if (!isEmail(emailVal2)) {
    setErrorMsg(email2, "Not a valid email");
  } 
  else {
    setSuccessMsg(email2);
  }
  

  //   validating phone
  if (phoneVal2 === "") {
    setErrorMsg(phone2, "Phone Number cannot be blank");
  } else if (phoneVal2.length !== 10) {
    setErrorMsg(phone2, "Not a valid phone number");
  } else {
    setSuccessMsg(phone2);
  }

  //   validating password
  if (passwordVal2 === "") {
    setErrorMsg(password2, "Password cannot be blank");
  } else if (passwordVal2.length <= 5) {
    setErrorMsg(password2, "Minimum 6 characters");
  } else {
    setSuccessMsg(password2);
  }

  //   validating Confirm password
  if (cpasswordVal2 === "") {
    setErrorMsg(cpassword2, "You must confirm your Password");
  } else if (cpasswordVal2 !== passwordVal2) {
    setErrorMsg(cpassword2, "Please enter the password same as above");
  } else {
    setSuccessMsg(cpassword2);
  } 
}
function setErrorMsg(input, errormsg) {
  const textBox2 = input.parentElement;
  const small = textBox2.querySelector("small");
  textBox2.classList.remove("success");
  textBox2.classList.add("error");
  small.innerHTML = errormsg;
}
function setSuccessMsg(input) {
  const textBox2 = input.parentElement;
  textBox2.classList.remove("error");
  textBox2.classList.add("success");
}

// adding event listeners to user/ landlord buttons
const loginBox1 = document.querySelector('.login-box')
const loginBox2 = document.querySelector('.login-box2')
const tenantBtn = document.querySelector('.tenant')
const landlordBtn = document.querySelector('.land-lord')
tenantBtn.addEventListener('click', ()=>{
  loginBox1.style.display="block";
  loginBox2.style.display="none";
  landlordBtn.style.background = "rgba(255, 255, 255, 0.1)"
  tenantBtn.style.background = "rgba(1, 250, 47, 0.519)"  
})
landlordBtn.addEventListener('click', ()=>{
  loginBox2.style.display="block";
    loginBox1.style.display="none";
    landlordBtn.style.background = "rgba(1, 250, 47, 0.519)"
    tenantBtn.style.background = "rgba(255, 255, 255, 0.1)"
})