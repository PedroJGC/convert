 // Obtendo os elementos do formulário
 const form = document.querySelector("form")
 const amount = document.querySelector("#amount")
 const currency = document.querySelector("#currency")

 // Manipulando o input amount para receber somente números.
 amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)
} 
