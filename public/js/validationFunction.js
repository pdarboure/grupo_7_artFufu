const isEmpty = (inputArray) => {
    const errors = []
        inputArray.forEach((input,i) => {
            let errorText = document.getElementById("error-"+i)
            if(!input.value.trim() && !errorText){
                let error = document.createElement("p")
                error.innerHTML = "El campo no puede estar vacío"
                error.setAttribute("id","error-"+i)
                error.classList.add("input-error")
                input.insertAdjacentElement("afterend",error)
                //errors.push(true)
            }
            !input.value.trim()? errors.push(true) : null
            if(input.value.trim() && errorText){
                errorText.remove()
            }
                });
                console.log(errors);
                return errors
    }
    