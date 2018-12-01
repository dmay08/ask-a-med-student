import React, {Component} from 'react';
import QuestionForm from '../../../components/QuestionForm/QuestionForm';
import QuestionList from '../../../components/QuestionList/QuestionList';
import './AppHomePage.css';

class AppHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
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
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHome;



