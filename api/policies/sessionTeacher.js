module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    if(req.session.passport.user.role == 'teacher'){
    	return res.redirect('/');
    }else{
    	return res.notFound();
    }
  }else{
    return next();
  }
};
