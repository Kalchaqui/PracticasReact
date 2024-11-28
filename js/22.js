//Optional Chainning (?)  Revisa si una propiedad existe

const alumno = {
    nombre: "kalcha",
    clase: "Javascrip 1",
    aprobado: "true",
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)
//verifica todos los codigos y evitamos el error total si falla un codigo o si falta

console.log("derspues de aliumno")

//Nullish Coolescing operator (??) Operador lógico que retorna el valor que esta en lado derecho,
//cuando el valor del lado izquierdo es nulo

const pagina = null ?? 1
console.log(pagina)