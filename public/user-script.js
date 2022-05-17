let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();
  let loginname = document.getElementById("loginname").value;
  let psw = document.getElementById("psw").value;
  console.log(loginname + " " + psw)
  fetchData('/users/login', {loginname: uname, password: psw})
  .then((data) => {
      if(!data.message) {
          window.location.href="Home.html";
      }
  }
  )
  .catch((err) => {
      let error = err.message;
      let p = document.querySelector("#login-form");
      p.innerText = error;

  }
  )

}

let regForm = document.getElementById("register-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;
  console.log(firstname + " " + lastname + " "+ username + " "+ email + " " + psw )

  fetchData('/users/register', {firstname: firstname, lastname: lastname, username: username, email: email, psw: psw })
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log('Error!  ${errText}')
  });


}