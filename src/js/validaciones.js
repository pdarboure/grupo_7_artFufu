const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');

const validarFormulario = (e) => {
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector("#apellido")
    const nombreUsuario = document.querySelector("#nombreUsuario")
    const emailRegistro = document.querySelector("#emailRegistro")
    const numeroTelefono = document.querySelector("#numeroTelefono")
    const passwordRegistro = document.querySelector("#passwordRegistro")
    const checkPassword = document.querySelector("#checkPassword")
    const image = document.querySelector("#image")
    if (e.target.name=="nombre" &&nombre.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="apellido" &&apellido.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="nombreUsuario" &&nombreUsuario.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="emailRegistro" &&emailRegistro.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="numeroTelefono" &&numeroTelefono.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="passwordRegistro" &&passwordRegistro.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="checkPassword" &&checkPassword.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    if (e.target.name=="image" &&image.value.length>1) {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-exito');
    }
    else {
        document.querySelector(`.input-box`).classList.add('formulario__mensaje-error');
    };
    
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
})