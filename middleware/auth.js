module.exports = (req, res, next) => {
    if(!req.session.user) res.redirect('/login')
    res.locals.user = req.session.user;
    next();
};