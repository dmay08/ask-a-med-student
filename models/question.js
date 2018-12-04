const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
    content: String,
    answerer: {type: Schema.Types.ObjectId, ref: 'User'},
    // add rating info here (for upvoting icebox feature)
}, {
    timestamps: true
})

const questionSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
        // ref = tells us name of model we use to populate
    answers: [answerSchema] // embedding - need to define separate Schema above
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
// don't export answerSchema (it's only being embedded - line 16)
