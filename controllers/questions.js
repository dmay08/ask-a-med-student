var Question = require('../models/question');


function index(req, res) {
    if (req.user.isApplicant) {
        Question.find({user: req.user._id})
        .sort({createdAt: -1}) // most recent first (descending) = -1
        .then(questions => {
            res.json(questions);
        });
    } else {
        Question.find({answers: {$size: 0}}) // finds all questions that have 0 answers 
        .sort({createdAt: 1}) // first answer = first (ascending) = 1
        .then(questions => {
            res.json(questions);
        });
    }
}


module.exports = {
    index
}