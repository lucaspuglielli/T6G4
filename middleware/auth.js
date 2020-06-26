module.exports = (req, res, next) => {
    if(!req.session.user){
        req.session.previousUrl = req.originalUrl;
        res.redirect('/login')
    }
    if(!req.session.user.admin){
        res.locals.user = req.session.user;
        next();
    } else{
        res.redirect('/administracao')
    }
    
};