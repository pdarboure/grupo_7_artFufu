function authMiddleware(req,res, next){
    console.log(req.session.userLogged);
    if (req.session.userLogged) {
        
        return res.redirect('/profile')
    }
    next()
}

module.exports = authMiddleware