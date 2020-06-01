module.exports = (req, res, next) => {
    if(!req.session.user) {
        const user = {name: "disconnected"}
        res.locals.user = user;
    } else
        res.locals.user = req.session.user;
    next();
};