var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var questionsCtrl = require('../../controllers/questions');

/*---------- Public Routes ----------*/
router.get('/', questionsCtrl.index); // 'index' usually means 'all of'



/*---------- Protected Routes ----------*/





module.exports = router;