export const GuardarEnStorage = (clave, elemento) => {
    let elementos = JSON.parse(localStorage.getItem(clave))

    // comprobar si es un array 

    if(Array.isArray(elementos)){

        // añadir dentro del array un elemento nuevo
        elementos.push(elemento)
    }else{

         // crear un array con la nueva elemento 
        elementos = [elemento]
    }

    // Guardar en el LocalStorage 

    localStorage.setItem(clave, JSON.stringify(elementos))

    // devolver objeto guardado 

    return elemento
}