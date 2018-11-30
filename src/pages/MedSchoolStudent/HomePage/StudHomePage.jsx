import React from 'react';
import QuestionList from '../../../components/QuestionList/QuestionList';

const StudentHome = (props) => (
    <div className="StudHome">
       <QuestionList 
            questionList={props.questionList}
        />
    </div>
);

export default StudentHome;