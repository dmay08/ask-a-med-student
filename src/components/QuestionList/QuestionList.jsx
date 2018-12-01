import React from 'react';
import './QuestionList.css'

const QuestionList = (props) => (
    <div className="QuestionList">
        { (props.user.isApplicant) 
        ? 
        <h1>My Questions</h1>
        :
        <h1>Questions to answer:</h1>
    }
        <div className="QuestionList-scroll">
            {props.questionList.map((question, index) => <div key={index}>{question.content}</div>)} 
        </div>
    </div>
)

export default QuestionList;