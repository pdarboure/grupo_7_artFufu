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
window.addEventListener('DOMContentLoaded',(e) =>{
    
    const formulario = document.getElementById('form-create');
    const nameId = document.getElementById ('name');
    const descriptionId = document.getElementById('description');
    const priceId = document.getElementById('price');
    const botonCreate = document.getElementById('botonCreate')
    

formulario.addEventListener("submit", (e)=>{
    const inputArray = [formulario.name,formulario.description,formulario.price]
    const inputEmpty = isEmpty(inputArray)
    
    if (inputEmpty.includes(true)) {
       e.preventDefault()
    }
    })
});


    