//Fetch API con ASYNC / AWAIT
//Fetch API combinada con async/await sirve para realizar solicitudes HTTP de forma más legible y estructurada en JavaScript, 
//ideal para manejar datos de APIs o recursos externos de manera asincrónica
//Fetch API es una interfaz que permite realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.)
const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async() => {
    try {
        const respuesta = await fetch(url)
        if(!respuesta.ok) {
            throw new Error("Error en la petición")
        }
        const data = await respuesta.json()
        console.log(data)
    } catch(error) {
        console.log(error.message)
    }

    }
consultarAPI()