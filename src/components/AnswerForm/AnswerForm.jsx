import React, {Component} from 'react';
import answerService from '../../utils/answerService';
import './AnswerForm.css';

class AnswerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {answer: ''}; // is 'answer' right? changed from 'question:'
    }

    handleChange = (event) => {
        this.setState({answer: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var question = await answerService.create(this.state.answer, this.props.question._id)
        this.props.onAnswerQuestion(this.state.answer); // matches 'handleAnswerQuestion'
        this.setState({answer: ''})
    }

    render() { 
        // console.log(this.props.question)
        return(
            <form  onSubmit={this.handleSubmit}>
                <div className="answer-wrapper">
                    <label className="input-group answer-input-wrap">
                        <input id="answer-input" className="form-control" type="text" value={this.state.answer} onChange={this.handleChange} />
                        <span className="input-group-btn">
                            <button id="button" className="btn btn-success" type="submit">Submit</button>
                        </span>
                    </label>
                </div>
            </form>
        );
    }
}

export default AnswerForm;