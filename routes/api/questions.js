var express = require('express');
var router = express.Router();
// var User = require('../../models/user');
var questionsCtrl = require('../../controllers/questions');

/*---------- Public Routes ----------*/
router.get('/', checkAuth, questionsCtrl.index); // 'index' usually means 'all of'
router.post('/', checkAuth, questionsCtrl.create);
    // should I add 'checkAuth' to these routes (like scores.js mastermind)


/*---------- Protected Routes ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;