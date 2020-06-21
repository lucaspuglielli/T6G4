module.exports = (req, res, next) => {
    if (!req.session.user) {
            next();
    } else if(req.session.user.admin) {
        res.redirect("/administracao");
    }
    next();
    };