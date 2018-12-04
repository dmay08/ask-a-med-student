var express = require('express');
var router = express.Router();
// var User = require('../../models/user');
var questionsCtrl = require('../../controllers/questions');

/*---------- Public Routes ----------*/
router.get('/', checkAuth, questionsCtrl.index); 
router.get('/:id', checkAuth, questionsCtrl.getOne); 
router.post('/', checkAuth, questionsCtrl.create);
router.put('/:id', checkAuth, questionsCtrl.addAnswer);
    // embedded answerSchema breaks RESTFUL routing (need to change route if i want to 'edit')
// add DELETE route


// router.get('/:id', checkAuth, questionsCtrl.getQ) // Jim said to delete this ctrl function



/*---------- Protected Routes ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;