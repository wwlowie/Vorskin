// var username = document.getElementById("username")
// console.log(username.value)

function validateForm() {
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var rbMale = document.getElementById("male")
    var rbFemale = document.getElementById("female")
    var choices = document.getElementById("choices")
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var termsncondi = document.getElementById("termsncondi")
    var newsletter = document.getElementById("newsletter")
    var errorMsg = document.getElementById("errorMsg")

    if (fullname.value.length < 1) {
        errorMsg.innerHTML = "Please fill your fullname"
    } else if (email.value.length < 1) {
        errorMsg.innerHTML = "Please fill your email adress (@sunib.com)"
    } else if (!email.value.endsWith("@sunib.com")) {
        errorMsg.innerHTML = "Please use sunib account"
    } else if (phone.value.length < 1) {
        errorMsg.innerHTML = "Please enter your phone number"
    } else if (!rbMale.checked && !rbFemale.checked) {
        errorMsg.innerHTML = "Please pick your gender"
    } else if (username.value.length < 8) {
        errorMsg.innerHTML = "Username must be at least 8 characters"
    } else if (password.value.length < 7) {
        errorMsg.innerHTML = "Password must be at least 7 characters"
    } else if (!termsncondi.checked || !newsletter.checked) {
        errorMsg.innerHTML = "Please agree to the terms and conditions & newsletter first before submitting"
    }
}