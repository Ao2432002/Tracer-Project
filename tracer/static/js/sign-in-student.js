// ------------------------------------ Title Change -------------------------------------- //
let title = document.querySelector('title')
setInterval(() => {
    if (title.innerHTML !== 'Tracer') {
        title.innerHTML = 'Tracer'
    }else{
        title.innerHTML = 'Sign In'
    }
}, 3000);

// ----------------------------------- Show and Hidden Password -----------------------------------//
function togglePassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}