var Question = require('../models/question');

// GET questions for USER
function index(req, res) {
    if (req.user.isApplicant) {
        Question.find({user: req.user._id})
        .sort({createdAt: -1}) // most recent first (descending) = -1
        .then(questions => {
            res.json(questions);
        });
    } else {
        Question.find({}) // finds all questions that have 0 answers 
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

// ASYNC! (more concise than '.then')
async function addAnswer(req, res) { // async = instead of using '.then'
    var question = await Question.findById(req.params.id); // AWAIT = same as '.then'
    question.answers.push(req.body);
    var response = await question.save();
    res.json(response)
}

function getOne(req, res) {
    Question.findById(req.params.id) 
        .then(question => {res.json(question)})
}

module.exports = {
    index,
    getOne,
    create,
    addAnswer
}