import React from 'react';

const Question = (props) => (
    <div>
        Q: {props.question.content}
        A: {props.answer}
    </div>
)

export default Question;