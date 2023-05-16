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

const formulario = document.getElementById("formulario");

const inputs = document.querySelectorAll("#formulario input");

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

// ejecuta el evento BLUR x el que se muestran los errores

let contentError = document.getElementById("error");

function mostrarError(error) {
  contentError.innerHTML = `<p class='error'>${error}</p>`;
}

// validar el CADA ERROR EN EL EVENTO BLUR
// function validarFormulario(evt) {
//     let input = evt.target;
//     let atributte = input.id;
//     let campo;
  
//     if (input.tagName == "INPUT") {
//       if (!input.value.length) {
//         input.style.borderBottomColor = "red";
//         input.style.color = "red";
  
//         if (atributte === "name") {
//           campo = "El nombre debe tener más de 2 caracteres!";
//         }
//         if (atributte === "description") {
//           campo = "La descripción debe tener más de 15 caracteres!";
//         }
//         if (atributte === "cantidad") {
//           campo = "La cantidad debe ser mayor a 0!";
//         }
//         if (atributte === "price") {
//           campo = "El precio no puede ser 0!";
//         }
//         if (atributte === "image") {
//           campo = "Debe incluir una imagen!";
//         }
//         if (atributte === "product_categories_id") {
//           campo = "Debe seleccionar una categoría!";
//         }
  
//         mostrarError(campo);
//       } else {
//         input.style.borderBottomColor = "red";
//         input.style.color = "red";
//       }
//     }
//   }

function validarFormulario(evt) {
  let input = evt.target;
  let atributte = input.id;
  let campo;

  if (input.tagName === "INPUT") {
    if (!input.value.length) {
      input.style.borderBottomColor = "red";
      input.style.color = "red";
    } else {
      input.style.borderBottomColor = "green";
      input.style.color = "green";
    }
    if (atributte === "name") {
      campo = "El nombre debe tener más de 2 caracteres!";
      input.style.borderBottomColor = input.value.length > 2 ? "green" : "red";
      input.style.color = input.value.length > 2 ? "green" : "red";
    } else if (atributte === "description") {
      campo = "La descripción debe tener más de 15 caracteres!";
      input.style.borderBottomColor = input.value.length > 15 ? "green" : "red";
      input.style.color = input.value.length > 15 ? "green" : "red";
    } else if (atributte === "cantidad") {
      campo = "La cantidad debe ser mayor a 0!";
      input.style.borderBottomColor = input.value > 0 ? "green" : "red";
      input.style.color = input.value > 0 ? "green" : "red";
    } else if (atributte === "price") {
      campo = "El precio no puede ser 0!";
      input.style.borderBottomColor = input.value > 0 ? "green" : "red";
      input.style.color = input.value > 0 ? "green" : "red";
    } else if (atributte === "image") {
      campo = "Debe incluir una imagen!";
      input.style.borderBottomColor = input.value.length > 0 ? "green" : "red";
      input.style.color = input.value.length > 0 ? "green" : "red";
    } else if (atributte === "product_categories_id") {
      campo = "Debe seleccionar una categoría!";
      input.style.borderBottomColor = input.value !== "" ? "green" : "red";
      input.style.color = input.value !== "" ? "green" : "red";
    }
    if (!input.value.length) {
        mostrarError(campo);
      } 
  }
}

formulario.addEventListener("submit", (e) => {
  if (formulario.name.value.length < 3) {
    e.preventDefault();
    // alert("Debes ingresar un nombre de mas de cinco caracteres");
  }
  if (formulario.description.value.length <= 15) {
    e.preventDefault();
    // alert("Debes ingresar una descripcion de mas de veinte caracteres")
  }
  if (formulario.capacity.value == "") {
    e.preventDefault();
    // alert("Debes ingresar una capacidad")
  }
  if (formulario.price.value == "") {
    e.preventDefault();
    // alert("Debes ingresar un precio")
  }
  if (!formulario.image.value) {
    e.preventDefault();
    // alert("Debes ingresar una imagen")
  }
  if (!formulario.product_categories_id.value) {
    e.preventDefault();
    // alert("Debes ingresar una categoria del producto")
  }
});
