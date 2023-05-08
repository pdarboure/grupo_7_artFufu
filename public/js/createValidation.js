// const isEmpty = (inputArray) => {
//     const errors = []
//         inputArray.forEach((input,i) => {
//             let errorText = document.getElementById("error-"+i)
//             if(!input.value.trim() && !errorText){
//                 let error = document.createElement("p")
//                 error.innerHTML = "El campo no puede estar vacío"
//                 error.setAttribute("id","error-"+i)
//                 error.classList.add("input-error")
//                 input.insertAdjacentElement("afterend",error)
//                 //errors.push(true)
//             }
//             !input.value.trim()? errors.push(true) : null
//             if(input.value.trim() && errorText){
//                 errorText.remove()
//             }
//                 });
//                 console.log(errors);
//                 return errors
//             }



// window.addEventListener('DOMContentLoaded',(e) =>{

//     const formulario = document.getElementById('form-create');
//     const nameId = document.getElementById ('name');
//     const descriptionId = document.getElementById('description');
//     const priceId = document.getElementById('price');
//     const botonCreate = document.getElementById('botonCreate')


// formulario.addEventListener("submit", (e)=>{
//     const inputArray = [formulario.name,formulario.description,formulario.price]
//     const inputEmpty = isEmpty(inputArray)

//     if (inputEmpty.includes(true)) {
//        e.preventDefault()
//     }
//     })
// });





const formulario = document.getElementById("formulario")
const nombre = document.getElementById("name")

const inputs = document.querySelectorAll('#formulario input');


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// ejecuta el evento BLUR x el que se muestran los errores

let contentError = document.getElementById('error');

function mostrarError(error) {
    contentError.innerHTML = `<p class='error'>${error}</p>`
}


// validar el CADA ERROR EN EL EVENTO BLUR
function validarFormulario(evt) {
    let input = evt.target
    let atributte = input.id
    let campo
    if (input.tagName == 'INPUT') {

        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red';
            // input.style.backgroundColor = "rgb(168, 110, 110)"; 
            if (atributte == "name") {
                campo = "nombre"
            }
            if (atributte == "description") {
                campo = "description"
            }
            if (atributte == "capacity") {
                campo = "capacidad"
            }
            if (atributte == "price") {
                campo = "precio"
            }
            if (atributte == "image") {
                campo = "imagen"
            }
            if (atributte == "product_categories_id") {
                campo = "categoria"
            }
        }
        mostrarError("Debe ingresar un valor en el campo " + campo + "!")

    } else {
        input.style.borderBottomColor = 'green';
        input.style.color = 'green';
    }
}

formulario.addEventListener("submit", (e)=>{
    if (formulario.name.value.length <= 5) {
        e.preventDefault();
        alert("Debes ingresar un nombre de mas de cinco caracteres")
    }
    if (formulario.description.value.length <= 20) {
        e.preventDefault();
        alert("Debes ingresar una descripcion de mas de veinte caracteres")
    }
    if (formulario.capacity.value == "") {
        e.preventDefault();
        alert("Debes ingresar una capacidad")
    }
    if (formulario.price.value == "") {
        e.preventDefault();
        alert("Debes ingresar un precio")
    }
    if (formulario.image.value == "") {
        e.preventDefault();
        alert("Debes ingresar una imagen")
    }
    if (formulario.product_categories_id.value == "") {
        e.preventDefault();
        alert("Debes ingresar una categoria del producto")
    }



})
