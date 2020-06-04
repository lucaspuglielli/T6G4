module.exports = (req, res, next) => {
    if (!req.session.user) {
        const user = {name: "disconnected"}
        res.render('login', {user});
    } else {
        res.redirect("/usuario/perfil");
    }
    next();
    };