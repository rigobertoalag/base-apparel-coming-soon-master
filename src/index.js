let email = document.getElementById("email")
let emailError = document.getElementById("email-error")


const sendEmail = () => {
    if (email.value.indexOf("@") == -1) {
        email.style.border = '1.5px solid red'
        emailError.style.display = 'block'
    } else {
        email.style.border = "1px solid hsl(0, 36%, 80%)";
        emailError.style.display = 'none'
    }
}