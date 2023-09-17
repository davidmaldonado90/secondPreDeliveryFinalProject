const form = document.getElementById("register");

form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch("/api/session/register", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(result => {
        if(result.status == 201){
            window.location.replace("/users/login")
        } else {            
            alert("usuario ya registrado");
            setTimeout(() => {
                window.location.replace("/users/register");
            }, 2000);
        } 
    })

})
