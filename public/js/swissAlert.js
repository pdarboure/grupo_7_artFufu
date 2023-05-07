
window.addEventListener('DOMContentLoaded',()=>{

    const updateBtn = document.getElementById('update-btn')

    updateBtn.addEventListener('click', () =>{
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })

});