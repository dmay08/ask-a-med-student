var express = require('express');
var router = express.Router();
var answersCtrl = require('../../controllers/answers');

/*---------- Public Routes ----------*/
// router.get('/', checkAuth, answersCtrl.index); 
// router.post('/', checkAuth, answersCtrl.create);
// router.get('/:id', checkAuth, answersCtrl.getAnswer); 



/*---------- Protected Routes ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;