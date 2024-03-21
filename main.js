let fName = document.getElementById('Firstname');
let lName = document.getElementById('lastname');
let emails = document.getElementById('email');
let pasword = document.getElementById('pass');
let confirmPassword = document.getElementById('con-pass');
let btn = document.getElementById('btn-ele');
let full;

let storagedata
let obj;
// ---------------------------------------------------------------


// button for submit start
if (btn) {



  btn.addEventListener('click', (event) => {
    event.preventDefault();

    obj = [{
      firstname: fName.value.trim(),
      lastname: lName.value,
      email: emails.value,
      password: pasword.value,
    }]

    full = obj;

    formvalidation()
    mycheckBox()

    localStorage.setItem('storage', JSON.stringify(full))


  })
}




// button for submit end

// -------------------------------------------------------------------------------
// input value if condition for warning start

// start firstname condition
let firstWarn = document.getElementById('firstWarn')

function firstnameWarn() {

  if (fName.value === '') {

    firstWarn.textContent = "Please Enter First Name"
    firstWarn.className = "warning"
    return false



  } else {
    firstWarn.style.display = 'none'
    return true

  }


}

// start firstname condition end

// start lastname condition
let lastNameWrn = document.getElementById('lastNameWarn');

function lastNameaWarn() {
  if (lName.value === '') {

    lastNameWrn.textContent = "Please Enter Last Name";
    lastNameWrn.className = "warning"
    return false
  } else {
    lastNameWrn.style.display = 'none'
    return true

  }
}
// end lastname condition

// email condition start

let emailWarning = document.getElementById('email-warning');

function emailwarn() {

  if (emails.value.includes('@')) {

    emailWarning.style.display = 'none'
    return true
  } else if (emails.value === '') {
    emailWarning.textContent = " email cannot be blank";
    emailWarning.className = "warning"
  } else {
    emailWarning.textContent = " Please enter valid email";
    emailWarning.className = "warning"
    return false
  }

}

// email condition end 

// password condition start

let passwordWrning = document.getElementById('password')
function passwordwarn() {
  if (pasword.value === '') {
    passwordWrning.textContent = "password cannot be blank"
    passwordWrning.className = "password_con"
    return false
  }
  else if (pasword.value.length < 8 || pasword.value.length > 20) {
    passwordWrning.textContent = "Password length cannot be less than 8"
    return false
  } else {

    passwordWrning.textContent = "Strong Password"
    passwordWrning.style.color = 'green'
    return true
  }

}

// password condition end


// input value if condition for warning end
// --------------------------------------------------------------------------
 

//  form validation and time out start
function formvalidation() {
  if (!firstnameWarn() || !lastNameaWarn() || !emailwarn() || !passwordwarn()) {

    return false
  } else {

    redirect()
    return true
  }
}



function redirect() {
  setTimeout(myURL, 3000)
  let result = document.getElementById('result')
  result.textContent = "Your account details have been saved !"
  result.className = "success"
}


function myURL() {
  open("index.html", "_self")

}
// timeout end

//------------------------------------------------------------------------------ 

function mycheckBox() {
  if (pasword.type === "password") {
    pasword.type = "text"
  } else {
    pasword.type = "password"
  }
}



// ---------------------------------------------------------------------------------------------------

// login pages

let loginMail = document.getElementById('login-input-ele');
let loginPassword = document.getElementById('login-password');
let loginBtn = document.getElementById('login-btn');
let loginsucess = document.getElementById('login_sucess')
let arr = []
let userMail;
let userPassword;
let objFull;
let userFirstName;
let userLastName;
function localobj() {


  let userData = JSON.parse(localStorage.getItem('storage'));

  let userAccount = userData
  arr.push(userAccount)


  for (let i = 0; i < arr.length; i++) {
    objFull = arr[i]


  }
  let arrAt = objFull.at(0)
  userMail = arrAt.email
  userPassword = arrAt.password
  userFirstName = arrAt.firstname
  userLastName = arrAt.lastname
  console.log(userPassword);
  console.log(userMail);

}


localobj()

//  login button function addeventlistner

if (loginBtn) {
  loginBtn.addEventListener('click', (events) => {
    events.preventDefault()

    emailWarn()
    loginsPasswords()
    loginvalidation()


  }


  )
}


//  login alert warning

// login email function warning

let mailWarn = document.getElementById('logininput-warn')

function emailWarn() {
  if (loginMail.value === '') {

    mailWarn.textContent = ' Please enter e-mail'
    mailWarn.style.color = 'red'
    mailWarn.className = "warning"

    false
  }
  else if (loginMail.value.includes('@')) {
    mailWarn.style.display = "none"
    true
  }
  else {
    mailWarn.textContent = ' Please enter valid email'
    mailWarn.style.color = 'red'
    mailWarn.className = "warning"
    false
  }
}

let loginPassWarn = document.getElementById('loginpassword')


// login password function warning
function loginsPasswords() {
  if (loginPassword.value === '') {
    loginPassWarn.textContent = ' Please enter Password'

    loginPassWarn.className = "warning"
    false
  } else if (loginPassword.value.length < 8) {
    loginPassWarn.textContent = 'Password length cannot be less than 8'
    loginPassWarn.className = "warning"
    false
  } else {

    loginPassWarn.style.display = 'none'
    true
  }
}

//  validation of login page to access new photo galley page

function loginvalidation() {
  if (loginMail.value === '' || loginPassword.value === '') {
    return false
  } else if (loginMail.value === userMail && loginPassword.value === userPassword) {
    loginredirect()
    return true
  } else {
    loginsucess.textContent = " Your email or password is not correct !"
    loginsucess.className = "login-sucess_warning"
    return false
  }
}

//  login redirect to another page

function loginredirect() {
  setTimeout(myNewUrl, 3000)

  loginsucess.textContent = "Your Login sucessful !"
  loginsucess.className = "login-sucess"
}

function myNewUrl() {
  open("main.html", "_self")
}

// login  checkbox 

function loginCheckBox() {
  if (loginPassword.type === "password") {
    loginPassword.type = "text"
  } else {
    loginPassword.type = "password"
  }
}


// ---------------------------------------------------------------------------------------------------------
// main.html nav bar user fullname data

let userFullName = document.getElementById('userfullname');

userFullName.textContent = ` Hello ${userFirstName}   ${userLastName} `;