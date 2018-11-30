import React, {Component} from 'react';
import QuestionForm from '../../../components/QuestionForm/QuestionForm';
import QuestionList from '../../../components/QuestionList/QuestionList';
// import './QuestionPage.css';

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
                <h1>New Question</h1>
                <div className="">
                    <QuestionForm 
                        {...this.props} 
                        updateMessage={this.updateMessage}
                    />
                    {/* ...this.props = ALREADY PASSING EvErYtHiNg down!!!!!! */}
                        {/* don't have to pass 'handleSignup' down here */}
                    <p>{this.state.message}</p>
                    <QuestionList 
                        {...this.props}
                    />
            </div>
        </div>
        );
    }
}

export default AppHome;



