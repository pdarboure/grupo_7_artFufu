const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');

const validarFormulario2 = (e) => {
    // const nombre = document.querySelector("#nombre")
    // const apellido = document.querySelector("#apellido")
    // const nombreUsuario = document.querySelector("#nombreUsuario")
    // const emailRegistro = document.querySelector("#emailRegistro")
    // const numeroTelefono = document.querySelector("#numeroTelefono")
   
    
}

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
    let atributte =  input.id   
    let campo 
    if (input.tagName == 'INPUT') {
        
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red'; 
            // input.style.backgroundColor = "rgb(168, 110, 110)"; 
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

formulario.addEventListener("keyup", ()=>{
    let password = document.querySelector("#passwordRegistro")
    let checkPassword = document.querySelector("#checkPassword")
    if (password.value == checkPassword.value) {
        password.style.backgroundColor="orange"
    }
    else{
        password.style.backgroundColor="red"
    }
    console.log(password.value == checkPassword.value, password.value, checkPassword.value);
    
})

formulario.addEventListener("submit", (e)=>{
      e.preventDefault();
    
     if (formulario.nombre.value == "") {
        alert("Debes ingresar tu nombre")
    }
    
    if (formulario.apellido.value == "") {
        alert("Debes ingresar tu apellido")
    }   
    if (formulario.numeroTelefono.value == "") {
        alert("Debes ingresar tu numero de telefono")
    }
    if (formulario.nombreUsuario.value == "") {
        alert("Debes ingresar tu nombre usuario")
    }
    if (formulario.passwordRegistro.value == "") {
        alert("Debes ingresar tu contraseña")
    }
    
    if (formulario.emailRegistro.value == "") {
        alert("Debes ingresar tu email")
    }
    
    if (formulario.checkPassword.value == "") {
        alert("Debes ingresar una confirmacion de contraseña")
    }
    
})

