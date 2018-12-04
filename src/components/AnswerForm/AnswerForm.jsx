import React, {Component} from 'react';
import answerService from '../../utils/answerService';
// import './AnswerForm.css';

class AnswerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {answer: ''}; // is 'answer' right? changed from 'question:'
    }

    handleChange = (event) => {
        this.setState({answer: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        answerService.create(this.state.answer)
        .then(answer => this.props.onAnswerQuestion(answer)); // matches 'handleAnswerQuestion'
        this.setState({answer: ''})
    }

    render() { 
        return(
            <form  onSubmit={this.handleSubmit}>
                <div className="answer-wrapper">
                    <label className="input-group">
                        {/* <h5>Type your answer below:</h5> */}
                        <input id="answer-input" className="form-control" type="text" value={this.state.answer} onChange={this.handleChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit">Submit</button>
                        </span>
                    </label>
                </div>
            </form>
        );
    }
}

export default AnswerForm;