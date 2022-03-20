function validate() {
    let form = document.querySelector("#form")
    let email = document.querySelector("#email").value
    let text = document.querySelector(".text")

    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Tu email es valido"
        text.style.color = "#00ff00"
    } else {
        
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Tu email es invalido"
        text.style.color = "#ff0000"
    }

    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
    }

}
