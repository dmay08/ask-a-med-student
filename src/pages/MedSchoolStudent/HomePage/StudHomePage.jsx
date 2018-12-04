import React, {Component} from 'react';
import QuestionList from '../../../components/QuestionList/QuestionList';
import QuestionDetail from '../../../components/QuestionDetail/QuestionDetail';
import AnswerForm from '../../../components/AnswerForm/AnswerForm';
import './StudHomePage.css'

class StudHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuestion: null,
            answerText: ''
        }
    }

    handleSelectQuestion = (e, question) => {
        e.preventDefault();
        this.setState({selectedQuestion: question})
        //
    }

    handleAnswerQuestion = (answerText) => {
        this.setState({answerText})
    }
    
    render() {
        return (
            <div className="StudHome-wrapper">
                <div className="StudHome">
                    <QuestionList 
                        questionList={this.props.questionList}
                        handleSelectQuestion={this.handleSelectQuestion}
                        // question={props.selectedQuestion}
                    />
                </div>
                <div className="Response-wrapper">
                    <h2>My Answer:</h2>
                    <hr/>
                        {this.state.selectedQuestion 
                            ?
                            <div>
                                <QuestionDetail 
                                    question={this.state.selectedQuestion}
                                />
                                {this.state.answerText}
                                <AnswerForm 
                                    question={this.state.selectedQuestion}
                                    onAnswerQuestion={this.handleAnswerQuestion}/>
                            </div>
                            :
                            <p>Click a Q above to view Answers!</p>
                        } 
                </div>
            </div>  
        );
        }
    }
export default StudHome;