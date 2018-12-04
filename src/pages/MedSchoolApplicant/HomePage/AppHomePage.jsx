import React, {Component} from 'react';
import QuestionForm from '../../../components/QuestionForm/QuestionForm';
import QuestionList from '../../../components/QuestionList/QuestionList';
import QuestionDetail from '../../../components/QuestionDetail/QuestionDetail';
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
        this.setState({selectedQuestion: question})
    }
    
    render() {
        return (
            <div className="AppHome">
                <div className="AppHome-wrapper">
                    <div className="QuestionForm-wrapper">
                        <h1>New Question</h1>
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
                        <h2>Answers:</h2>
                            {this.state.selectedQuestion 
                                ?
                                <QuestionDetail 
                                    question={this.state.selectedQuestion}
                                />
                                :
                                <p>Click a Q above to view Answers!</p>
                            } 
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHome;



