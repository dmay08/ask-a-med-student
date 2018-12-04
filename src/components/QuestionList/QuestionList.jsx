import React from 'react';
import Question from '../../components/Question/Question';
import './QuestionList.css'

const QuestionList = (props) => (
    <div className="QuestionList">
        { (props.user) && (props.user.isApplicant) 
        ? 
        <h1>My Questions</h1>
        :
        <h1>Q's to answer:</h1>
    }
        <div className="QuestionList-scroll">
            {props.questionList.map((question, index) => 
                <div onClick={(e) => props.handleSelectQuestion(e, question)} key={question._id}>{question.content}
            </div>
            )}
        </div>
    </div>
)

export default QuestionList;