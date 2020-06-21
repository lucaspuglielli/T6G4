module.exports = (req, res, next) => {
    if(!req.session.user) res.redirect('/login')
    if(!req.session.user.admin){
        res.locals.user = req.session.user;
        next();
    } else{
        res.redirect('/administracao')
    }
    
};