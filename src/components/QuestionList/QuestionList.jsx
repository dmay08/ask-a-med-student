import React from 'react';

const QuestionList = (props) => (
    <div className="QuestionList">
        <h1>Questions:</h1>
        {props.questionList.map((question, index) => <div key={index}>{question.content}</div>)} 
    </div>
)

export default QuestionList;