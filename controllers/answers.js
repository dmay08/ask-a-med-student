var Answer = require('../models/answer');

// GET answer for USER
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

function create(req, res) {
    var question = new Question(req.body);
    question.user = req.user._id; // assigning the object ID
    question.save()
    .then(question => {
        res.json(question);
    })
    .catch(err => {
        res.json({error: err})
    });
}

// // ??????? - NEWLY WRITTEN
// function getQ(req, res) {
//     Question.findById(req.params.id) 
//         .then(question => {res.json(question)})
// }

module.exports = {
    index,
    create
}