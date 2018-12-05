import React, {Component} from 'react';
// import questionService from '../../utils/questionService';
import './QuestionDetail.css';

const QuestionDetail = (props) => (
    <div className="QuestionDetail">
        <h4>Q: {props.question.content}</h4>
        <hr/>
        {props.question.answers.map(a => <div className="app-answers">A: {a.content}</div>)} {/* refactor to an Answer component */}
    </div>
);


export default QuestionDetail;


   