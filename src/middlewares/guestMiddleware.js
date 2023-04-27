function guestMiddleware(req,res, next){
    if (!req.session.userLogged && !req.session.admin) {
        
        return res.redirect('/login')
    }
    next()
}

module.exports = guestMiddleware