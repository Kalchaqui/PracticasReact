const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e => {
e.preventDefault()

const nombre = document.querySelector("#nombre").value
const password = document.querySelector("#password").value

const alerta = document.createElement("DIV")
//alerta.textContent = 'Contenido de Alerta'
//alerta.classList.add('clase-1','clase-2','clase-3')
//console.log(alerta)
alerta.classList.add('alerta', 'text-white', 'uppercase', 
    'text-sm', 'text-center','p-2', 'font-black')
if(nombre === '' || password === ''){
    //console.log('todos los campos son obligatorios')
    alerta.textContent = 'Todos los campos son obligatorios'
    alerta.classList.add('bg-red-500')
}else {
    //console.log('todo bien')

    alerta.textContent="todo bien!!! iniciar sesion"
    alerta.classList.add('bg-blue-500')
}
formulario.appendChild(alerta)
//formulario appendChild es un hijo de
setTimeout(()=> {

}, 3000);

//console.log(alerta)

})