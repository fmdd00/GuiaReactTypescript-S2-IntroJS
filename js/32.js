// Eventos del dom . submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const pass = document.querySelector('#password').value

    // Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()

    const alerta = document.createElement('DIV')
    alerta.textContent = 'Contenido de alerta'
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')

    if(nombre === '' || pass === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')
    } else {
        alerta.textContent = 'Iniciando sesion'
        alerta.classList.add('bg-green-500')
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 2000)


    console.log(alerta)
})