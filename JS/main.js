const form = document.querySelector("#menu")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btn = document.querySelector(".botao_primario")


btn.addEventListener("click", (event) => {
event.preventDefault();
console.log("oiii")
    if(emailInput.value === "", passwordInput.value === ""){
        alert("Por favor, preencha os campos!");
    }
    else{
        window.location.href = "home.html";
    }
})

function funcao1()
{
alert("Sua conta foi criada!");
}
