const formulario = document.getElementById("formulario")

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
function mostrarErrorNombre(error) {
    contentError.innerHTML = `<p class='errorNombre'>${error}</p>`
}
function mostrarErrorDescription(error) {
    contentError.innerHTML = `<p class='errorDescritcion'>${error}</p>`
}
function mostrarErrorCantidad(error) {
    contentError.innerHTML = `<p class='errorCantidad'>${error}</p>`
}
function mostrarErrorPrice(error) {
    contentError.innerHTML = `<p class='errorPrice'>${error}</p>`
}
function mostrarErrorImage(error) {
    contentError.innerHTML = `<p class='errorPrecio'>${error}</p>`
}
function mostrarErrorCategory(error) {
    contentError.innerHTML = `<p class='errorPrecio'>${error}</p>`
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
    if (formulario.cantidad.value.length < 15) {
        e.preventDefault();
        mostrarErrorCantidad("Debes ingresar una descripcion de mas de 15 caracteres")
    }
    if (formulario.price.value < 0) {
        e.preventDefault();
        mostrarErrorPrice("Debes ingresar un precio mayor a 0")
    }
    if (formulario.image.value === !image.value) {
        e.preventDefault();
        mostrarErrorImage("Debes ingresar una imagen")
    }
    if (formulario.product_categories_id.value === !product_categories_id.value) {
        e.preventDefault();
        mostrarErrorCategory("Debes ingresar una categoria del producto")
    }



})
