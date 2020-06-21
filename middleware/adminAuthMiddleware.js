module.exports = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect('/administracao/login');
    } else {
        if(req.session.user.admin == true){
            next();
        }else{
            res.redirect('administracao/login')
        }
    };
};