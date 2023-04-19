// const formulario = document.getElementById("formulario")

// const inputs = document.querySelectorAll('#formulario input');

// const validarFormulario = (e) => {
//     const nombre = document.querySelector("#nombre")
//     const apellido = document.querySelector("#apellido")
//     const nombreUsuario = document.querySelector("#nombreUsuario")
//     const emailRegistro = document.querySelector("#emailRegistro")
//     const numeroTelefono = document.querySelector("#numeroTelefono")
//     const passwordRegistro = document.querySelector("#passwordRegistro")
//     const checkPassword = document.querySelector("#checkPassword")
//     const image = document.querySelector("#image")
//     if (e.target.name=="nombre" &&nombre.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="apellido" &&apellido.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="nombreUsuario" &&nombreUsuario.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="emailRegistro" &&emailRegistro.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="numeroTelefono" &&numeroTelefono.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="passwordRegistro" &&passwordRegistro.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="checkPassword" &&checkPassword.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
//     if (e.target.name=="image" &&image.value.length>1) {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
//     }
//     else {
//         document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
//     };
    
// }
// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// })
// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault();
// })


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
//validacion de password


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

formulario.addEventListener("keyup", ()=>{
    let password = document.querySelector("#passwordRegistro")
    let checkPassword = document.querySelector("#checkPassword")
    if (!password.value == checkPassword.value) {
        password.style.backgroundColor="red"
    }
    else{
        password.style.backgroundColor="orange"
    }
       
 
})


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    if ((formulario.nombre.value == "") || (formulario.apellido.value == "") ||(formulario.numeroTelefono.value == "") || (formulario.nombreUsuario.value == "") ||  (formulario.passwordRegistro.value == "") || (formulario.emailRegistro.value == "") || (formulario.checkPassword.value == ""))
        alert("Tenes que llenar el formulario!!!")
    }
    )