// Eventos del dom . submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    console.log(nombre)
    const pass = document.querySelector('#password').value
    console.log(pass)

    if(nombre === '' || pass === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, iniciando sesion...')
    }
})