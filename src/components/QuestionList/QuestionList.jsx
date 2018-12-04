import React from 'react';
import Question from '../../components/Question/Question';
import './QuestionList.css'

const QuestionList = (props) => (
    <div className="QuestionList">
        { (props.user) && (props.user.isApplicant) 
        ? 
        <div>
            <h2>My Questions</h2>
            <p>(scroll to view all Q's)</p>
            <hr/>
        </div>
        :
        <div>
            <h2>Q's to answer:</h2>
            <p>(scroll to view all Q's)</p>
            <hr/>
        </div>
    }
        <div className="QuestionList-scroll">
            {props.questionList.map((question, index) => 
                <div onClick={(e) => props.handleSelectQuestion(e, question)} key={question._id}>{question.content}<hr/>
            </div>
            )}
        </div>
    </div>
)

export default QuestionList;