module.exports = (req, res, next) => {
    if (!req.session.user) {
            res.render('login-adm');
    } else if(req.session.user.admin) {
        res.redirect("/administracao");
    }
    next();
    };