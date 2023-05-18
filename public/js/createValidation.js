const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// ejecuta el evento BLUR x el que se muestran los errores

let contentErrorName = document.getElementById('errorNombre');
let contentErrorCantidad = document.getElementById('errorCantidad');
let contentErrorPrice = document.getElementById('errorPrice');
let contentErrorUsuario = document.getElementById('errorUsuario');
let contentErrorDescription = document.getElementById('errorDescription');
let contentErrorImage = document.getElementById('errorImage');
let contentErrorCategory = document.getElementById('errorCategory');

let contentError = document.getElementById('error');

function mostrarError(error) {
    contentError.innerHTML = `<p class='error'>${error}</p>`
}
function mostrarErrorNombre(error) {
    contentErrorName.innerHTML = `<p class='errorNombre'>${error}</p>`
}
function mostrarErrorDescription(error) {
    contentErrorDescription.innerHTML = `<p class='errorDescription'>${error}</p>`
}
function mostrarErrorCantidad(error) {
    contentErrorCantidad.innerHTML = `<p class='errorCantidad'>${error}</p>`
}
function mostrarErrorPrice(error) {
    contentErrorPrice.innerHTML = `<p class='errorPrice'>${error}</p>`
}
function mostrarErrorImage(error) {
    contentErrorImage.innerHTML = `<p class='errorImage'>${error}</p>`
}
function mostrarErrorCategory(error) {
    contentErrorCategory.innerHTML = `<p class='errorCategory'>${error}</p>`
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

            if (atributte == "name") {
                campo = "nombre"
            }
            if (atributte == "description") {
                campo = "description"
            }
            if (atributte == "cantidad") {
                campo = "cantidad"
            }
            if (atributte == "description") {
                campo = "description"
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
            mostrarError("Debe ingresar un valor en el campo " + campo + "!")

        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'green';
        }
    }
}

formulario.addEventListener("submit", (e)=>{
    if (formulario.name.value.length < 3) {
        e.preventDefault();
        mostrarErrorNombre("Debes ingresar un nombre de mas de 3 caracteres")
    }
    if (formulario.description.value.length < 15) {
        e.preventDefault();
        mostrarErrorDescription("Debes ingresar una descripcion de mas de 15 caracteres")
    }
    if (formulario.cantidad.value.length =="") {
        e.preventDefault();
        mostrarErrorCantidad("Debes ingresar una cantidad")
    }
    if (formulario.price.value.length < 9) {
        e.preventDefault();
        mostrarErrorPrice("Debes ingresar un precio mayor a 9")
    }
    if (formulario.image.value.length == "") {
        e.preventDefault();
        mostrarErrorImage("Debes ingresar una imagen")
    }
    if (formulario.product_categories_id.value.length == "") {
        e.preventDefault();
        mostrarErrorCategory("Debes ingresar una categoria del producto")
    }



})
