// Eventos del dom - inputs
const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
})

const inputPass = document.querySelector('#password')
inputPass.addEventListener('input', functionPass)

function functionPass() {
    inputPass.type = "text"

    setTimeout(() => {
        inputPass.type = 'password'
    }, 300);
}