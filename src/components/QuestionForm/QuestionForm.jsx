import React, {Component} from 'react';
import questionService from '../../utils/questionService';
import './QuestionForm.css';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {question: ''};
    }

    handleChange = (event) => {
        this.setState({question: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        questionService.create(this.state.question)
        .then(question => this.props.handleNewQuestion(question));
        this.setState({question: ''})
    }

    render() { 
        return(
            <form  onSubmit={this.handleSubmit}>
                <div className="question-wrapper">
                    <label className="input-group">
                        {/* <h5>Type your question below:</h5> */}
                        <input id="question-input" className="form-control" type="text" value={this.state.question} onChange={this.handleChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit">Submit</button>
                        </span>
                    </label>
                </div>
            </form>
        );
    }
}

export default QuestionForm;