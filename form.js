// all elements


const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const form = document.querySelector("#form");

form.addEventListener("submit", (Event) => {

    Event.preventDefault();

    if (username.value === '') {
        username.style.border = '1px solid red';
    }

    if (email.value === '') {
        email.style.border = '1px solid red'
    }

    if (password.value === '') {
        password.style.border = '1px solid red';
    }

    if (Confirmpassword.value === '') {
        Confirmpassword.style.border = '1px solid red';
    }
})