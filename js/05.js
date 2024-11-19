//OBJETOS - Destructuring de dos o más objetos

const producto = {
        nombre : 'Tablet',
        precio : 300,
        disponible : false
    }

    const cliente = {
        nombre: "kalcha",
        premium: true,
        direccion : {
            calle : "Av. Los Angeles"
            
        }
    }

    const {nombre} = producto
    const {nombre: nombreCliente, direccion: {calle}} = cliente

    console.log(nombre)
    console.log(nombreCliente)
    console.log(calle)