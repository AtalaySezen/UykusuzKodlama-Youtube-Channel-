let passwordInput = document.getElementById("password");
let userInput = document.getElementById("username");
let loginButton = document.getElementById("btn-login");
let input = document.querySelectorAll("input");
let errorMessage = document.getElementById("messages");



//Validate Username
function validateUsername() {
    if (userInput.value === "") {
        errorMessage.innerHTML = "Kullanıcı adı boş olamaz";
    } else if (userInput.value.length < 3) {
        errorMessage.innerHTML = "Kullanıcı adı 1 karakterden fazla olmalı";
    } else {
        return true;
    }
}


//Validate Password
function validatePassword() {
    if (passwordInput.value === "") {
        errorMessage.innerHTML = "Şifre boş olamaz";
    } else if (passwordInput.value.length < 3) {
        errorMessage.innerHTML = "Şifre 1 karakterden fazla olmalı";
    } else {
        errorMessage.innerHTML = "Hoşgeldiniz";
        return true;
    }
}



function login() {
    validateUsername();
    validatePassword();
}

loginButton.addEventListener("click", login);










//ShowPassword
function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}