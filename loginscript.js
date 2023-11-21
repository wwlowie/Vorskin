function validateForm() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    if (!email.value.endsWith("@sunib.com")) {
        alert("Email is invalid")
    } else {
        MessagePort("Successfully logged in")
    }
}