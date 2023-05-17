const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// ejecuta el evento BLUR x el que se muestran los errores

let contentError = document.getElementById('error');
let contentErrorName = document.getElementById('errorNombre');
let contentErrorApellido = document.getElementById('errorApellido');
let contentErrorMail = document.getElementById('errorMail');
let contentErrorUsuario = document.getElementById('errorUsuario');
let contentErrorTelefono = document.getElementById('errorTelefono');

function mostrarError(error) {
    contentError.innerHTML = `<p class='error'>${error}</p>`
}
function mostrarErrorNombre(error) {
    contentErrorName.innerHTML = `<p class='errorNombre'>${error}</p>`
}
function mostrarErrorApellido(error) {
    contentErrorApellido.innerHTML = `<p class='errorApellido'>${error}</p>`
}
function mostrarErrorMail(error) {
    contentErrorMail.innerHTML = `<p class='errorMail'>${error}</p>`
}
function mostrarErrorUsuario(error) {
    contentErrorUsuario.innerHTML = `<p class='errorUsuario'>${error}</p>`
}
function mostrarErrorTelefono(error) {
    contentErrorTelefono.innerHTML = `<p class='errorTelefono'>${error}</p>`
}

// validar el CADA ERROR EN EL EVENTO BLUR
function validarFormulario(evt) {
    let input = evt.target    
    let atributte =  input.id   
    let campo 
    if (input.tagName == 'INPUT') {
        
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red'; 
           
            if (atributte == "nombre") {
                campo = "nombre"             
            }
            if (atributte == "apellido") {
                campo = "apellido"             
            }
            if (atributte == "emailRegistro") {
                campo = "email"             
            }
            if (atributte == "numeroTelefono") {
                campo = "numero de telefono"             
            }
            if (atributte == "nombreUsuario") {
                campo = "nombre usuario"             
            }
            if (atributte == "checkPassword") {
                campo = "confirme contraseña"             
            }
            if (atributte == "passwordRegistro") {
                campo = "contraseña"             
            }
            mostrarError("Debe ingresar un valor en el campo " + campo + "!")            
            
        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'green';
        }
    }
}

//validacion de password

// formulario.addEventListener("keyup", ()=>{
//     let password = document.querySelector("#passwordRegistro")
//     let checkPassword = document.querySelector("#checkPassword")
//     if (password.value == checkPassword.value) {
    
//     }
//     else{
//         password.style.backgroundColor="red"
//     }
//     console.log(password.value == checkPassword.value, password.value, checkPassword.value);
    
// })

formulario.addEventListener("keyup", ()=>{
    let password = document.querySelector("#passwordRegistro")
    let checkPassword = document.querySelector("#checkPassword")
    if (password.value == checkPassword.value) {
        password.style.borderBottomColor="green"
    }
    else{
        password.style.borderBottomColor="red"
    }
    console.log(password.value == checkPassword.value, password.value, checkPassword.value);
    
 })



  formulario.addEventListener("submit", (e)=>{
    if (formulario.nombre.value.length < 3) {
        e.preventDefault();
        mostrarErrorNombre("Debes ingresar un nombre de mas de tres caracteres")
    }
    if (formulario.apellido.value.length < 3) {
        e.preventDefault();
        mostrarErrorApellido("Debes ingresar un apellido de mas de tres caracteres")
    }
    if (formulario.emailRegistro.value.length < 5) {
        e.preventDefault();
        mostrarErrorMail("Debes ingresar un email valido")
    }
    if (formulario.numeroTelefono.value.length < 10) {
        e.preventDefault();
        mostrarErrorTelefono("Debes ingresar un usuario de mas de diez caracteres")
    }
    if (formulario.nombreUsuario.value.length <3 ) {
        e.preventDefault();
        mostrarErrorUsuario("Debes ingresar un usuario de mas de tres caracteres")
    }
    if (formulario.checkPassword.value.length <= 7) {
        e.preventDefault();
        mostrarError("Debes ingresar una contraseña mayor a 8 caracteres")
    }
    if (formulario.passwordRegistro.length <= 7) {
        e.preventDefault();
        mostrarError("Debes ingresar una contraseña mayor a 8 caracteres")
    }



})


// formulario.addEventListener("submit", (e)=>{
//      const inputArray = [formulario.nombre,formulario.apellido,formulario.numeroTelefono,formulario.nombreUsuario,formulario.passwordRegistro,formulario.emailRegistro]
    
//     const inputEmpty = isEmpty(inputArray)

//     if (inputEmpty.includes(true)) {
//         e.preventDefault()
//     }
// })
