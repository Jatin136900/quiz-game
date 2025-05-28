let users = [];


function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
function isValidName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}
document.getElementById("registerBtn").addEventListener("click", function () {
  let name = document.getElementById("regName").value.trim();
  let email = document.getElementById("regEmail").value.trim();
  let password = document.getElementById("regPass").value.trim();
  let confirm = document.getElementById("regConfirm").value.trim();




  if (name === "") {
    alert("Please enter your name");
    return;
  }
 else if (!isValidName(name)) {
  alert("Name can only contain letters (no numbers or special characters)");
  return;
}
 else if (!isValidEmail(email)) {
  alert("Write correct email. Example: example@gmail.com");
  return;
}

else if (email === "") {
  alert("Please enter your email");
  return;
} else if (!isValidEmail(email)) {
  alert("write correct email Example: example@gmail.com");
  return;
} else if (password === "") {
  alert("Please enter your password");
  return;
} else if (confirm === "") {
  alert("Please confirm your password");
  return;
}
else if (password !== confirm) {
  alert("Password and Confirm Password do not match");
  return;
}

else if (password.length < 5) {
  alert("Password must be at least 6 characters");
  return;
}


let alreadyExists = users.find(user => user.email === email);
if (alreadyExists) {
  alert("this eamil is already registerd");
  return;
}


users.push({ name, email, password });
alert("Register successful");

let loginTab = document.getElementById("home-tab");
let switchTab = new bootstrap.Tab(loginTab);
switchTab.show();


document.getElementById("regName").value = '';
document.getElementById("regEmail").value = '';
document.getElementById("regPass").value = '';
document.getElementById("regConfirm").value = '';
});

document.getElementById("loginBtn").addEventListener("click", function () {
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPass").value.trim();



  if (email === "") {
    alert("Please enter your email");
    return;
  } else if (password === "") {
    alert("Please enter your password");
    return;
  }


  if (!isValidEmail(email)) {
    alert("write correct email");
    return;
  }

  let foundUser = users.find(user => user.email === email && user.password === password);


  if (foundUser) {
    alert("Welcome " + foundUser.name + "! Login successful.");
    localStorage.setItem("loggedInUser", foundUser.name);
    window.location.href = "quiz.html";
  } else {
    alert("Wrong email or password");
  }

});




