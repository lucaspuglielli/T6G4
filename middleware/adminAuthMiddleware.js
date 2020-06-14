module.exports = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect('/administracao/login');
    } else {
        next();
    };
};