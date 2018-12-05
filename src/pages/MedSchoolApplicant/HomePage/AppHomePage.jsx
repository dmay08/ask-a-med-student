import React, {Component} from 'react';
import QuestionForm from '../../../components/QuestionForm/QuestionForm';
import QuestionList from '../../../components/QuestionList/QuestionList';
import QuestionDetail from '../../../components/QuestionDetail/QuestionDetail';
import questionService from '../../../utils/questionService';
import './AppHomePage.css';

class AppHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            selectedQuestion: null
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    handleSelectQuestion = (e, question) => {
        e.preventDefault();
        questionService.getOne(question._id)
        .then(question => this.setState({selectedQuestion: question}));
    }
    
    render() {
        console.log(this.state.selectedQuestion)
        return (
            <div className="AppHome">
                <div className="AppHome-wrapper">
                    <div className="QuestionForm-wrapper">
                        <h3>New Question</h3>
                        <QuestionForm 
                            {...this.props} 
                            updateMessage={this.updateMessage}
                        />
                    </div>
                    <div className="QuestionList-wrapper">
                        <p>{this.state.message}</p>
                        <QuestionList 
                            {...this.props}
                            handleSelectQuestion={this.handleSelectQuestion}
                            question={this.state.selectedQuestion}
                        />
                    </div>
                    <div className="Response-wrapper">
                        <h3>Answers:</h3>
                        <hr/>
                            {this.state.selectedQuestion 
                                ?
                                <QuestionDetail 
                                    question={this.state.selectedQuestion}
                                />
                                :
                                <p className="starter-text">Click a Q above to view Answers!</p>
                            } 
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHome;



