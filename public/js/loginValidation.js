window.addEventListener('load',(e) =>{
    
    const formLogin = document.getElementById('form-login')

    const email = document.getElementById('email-login')

    const password = document.getElementById('password-login')

    formLogin.addEventListener('submit', (e) =>{

        const loginEmpty = isEmpty([email, password])
    
        if (loginEmpty.includes(true)) {
            e.preventDefault()
        }
    })


});