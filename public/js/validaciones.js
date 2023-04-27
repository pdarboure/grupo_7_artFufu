const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');

const validarFormulario2 = (e) => {
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector("#apellido")
    const nombreUsuario = document.querySelector("#nombreUsuario")
    const emailRegistro = document.querySelector("#emailRegistro")
    const numeroTelefono = document.querySelector("#numeroTelefono")
   
    
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
    if (input.tagName == 'INPUT') {
        
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red'; 
            // input.style.backgroundColor = "rgb(168, 110, 110)"; 
            if (atributte == "nombre") {
                atributte = "nombre"             
            }
            if (atributte == "apellido") {
                atributte = "apellido"             
            }
            if (atributte == "emailRegistro") {
                atributte = "email"             
            }
            if (atributte == "numeroTelefono") {
                atributte = "numero de telefono"             
            }
            if (atributte == "nombreUsuario") {
                atributte = "nombre usuario"             
            }
            if (atributte == "checkPassword") {
                atributte = "confirme contraseña"             
            }
            if (atributte == "passwordRegistro") {
                atributte = "contraseña"             
            }
            mostrarError("Debe ingresar un valor en el campo " + atributte + "!")            
            
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
    
    if ((formulario.nombre.value == "") || (formulario.apellido.value == "") ||(formulario.numeroTelefono.value == "") || (formulario.nombreUsuario.value == "") ||  (formulario.passwordRegistro.value == "") || (formulario.emailRegistro.value == "") || (formulario.checkPassword.value == "")){

        e.preventDefault();
        // alert("Tenes que llenar el formulario!!!")
    }else{
        e.submit()
    }
    
})

