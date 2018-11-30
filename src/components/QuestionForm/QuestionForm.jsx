import React, {Component} from 'react';
// import Redirect from 'react-router-dom';

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
        // call the questionService.create(this.state.question)
        // .then(question => this.props.handleNewQuestion(question))
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type your question here...
                    <input type="text" value={this.state.question} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default QuestionForm;