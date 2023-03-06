const User = require('../services/User');

function loggedMiddleware(req,res, next){
   res.locals.userIsLogged = false
   const cookieUser = req.cookies.userCookie 
   const user = User.findByField ( 'email', cookieUser)

   if(cookieUser){
       req.session.userLogged = user
   }
  
   if (req.session.userLogged) {
    res.locals.userIsLogged = true
    res.locals.userLogged = req.session.userLogged
   }
   next()
}

module.exports = loggedMiddleware