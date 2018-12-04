import React from 'react';

const Question = (props) => (
    <div>
        Q: {props.question.content}
        A: {props.answer}
        {/* <p onClick={() => props.handleClick(question._id)} className="Question">{props.question}</p> */}
    </div>
)

export default Question;