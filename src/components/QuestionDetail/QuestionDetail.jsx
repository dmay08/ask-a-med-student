import React, {Component} from 'react';
// import questionService from '../../utils/questionService';
import './QuestionDetail.css';

const QuestionDetail = (props) => (
    <div className="QuestionDetail">
        <h5>Q: {props.question.content}</h5>
        <hr/>
        {props.question.answers.map(a => <div>A: {a.content}</div>)} {/* refactor to an Answer component */}
    </div>
);


export default QuestionDetail;


   