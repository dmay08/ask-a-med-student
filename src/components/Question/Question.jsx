import React from 'react';

const Question = (props) => (
    <div>
        {props.question.content}
        {/* <p onClick={() => props.handleClick(question._id)} className="Question">{props.question}</p> */}
    </div>
)

export default Question;