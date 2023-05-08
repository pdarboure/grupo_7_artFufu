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
            if (atributte == "name2") {
                campo = "descripcion"
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
    if (formulario.name2.value.length <= 20) {
        e.preventDefault();
        alert("Debes ingresar una descripcion de mas de veinte caracteres")
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
