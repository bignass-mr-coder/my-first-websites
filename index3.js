function showMessage() {
    const message =
    document.getElementById("message");
    message.innerText = "Thank you for reaching out! I'll reply soon.";
}

function greetUser() {
    const name =
    document.getElementById("userName").value;
    const output =
    document.getElementById("greetou tput");
        if (name.trim() ==="") {
            output.innerText ="Please enter your name!";
        }  else {
            output.innerText = 'hello, ${name}! Thanks for visiting!';
        }
},/