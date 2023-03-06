function loggedMiddleware(req,res, next){
   res.locals.userIsLogged = false
   if (req.session.userLogged) {
    res.locals.userIsLogged = true
    res.locals.userLogged = req.session.userLogged
   }
   next()
}

module.exports = loggedMiddleware