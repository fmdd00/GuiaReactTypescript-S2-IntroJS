// Manipular elementos html con js
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'
// heading.id = 'Un nuevo ID'

// heading.removeAttribute('id')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor'

enlaces.forEach( enlace => enlace.textContent = 'Un nuevo enlace' )