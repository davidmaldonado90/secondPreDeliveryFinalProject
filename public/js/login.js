const form = document.getElementById("login");

form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch("/api/session/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(result => {
        if(result.status == 200){
            window.location.replace("/products");
        } else if(result.status === 401){
            alert ("login invalido, revisar credenciales")
        }
    })

})