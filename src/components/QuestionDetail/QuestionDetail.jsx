import React, {Component} from 'react';
import questionService from '../../utils/questionService';
// import './QuestionDetail.css';

const QuestionDetail = (props) => (
    <div className="QuestionDetail">
        <h3>{props.question.content}</h3>
        {props.question.answers.map(a => <div>{a.content}</div>)} {/* refactor to an Answer component */}
    </div>
);


export default QuestionDetail;

   