module.exports = (req, res, next) => {
    if (!req.session.user) {
        const user = {name: "disconnected"}
        res.render('login-adm', {user});
    } else {
        res.redirect("/administracao");
    }
    next();
    };