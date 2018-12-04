const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
    content: String,
    answerer: {type: Schema.Types.ObjectId, ref: 'User'},
    // add rating info here (for upvoting icebox feature)
}, {
    timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema);