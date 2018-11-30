import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from 'react-router-dom';
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AppHomePage from '../MedSchoolApplicant/HomePage/AppHomePage';
import StudHomePage from '../MedSchoolStudent/HomePage/StudHomePage';
import NavBar from '../../components/NavBar/NavBar';

import userService from '../../utils/userService';
import questionService from '../../utils/questionService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      questionList: []
    }
  }

  // 6) Implement Log Out functionality ('onClick' w/ this func = 'NavBar.jsx' page)
  handleLogout = () => { // go to 'userService' & write 'logout' func
    userService.logout();
    this.setState({ user: null });
  }

  // 7) Update the user in <App>'s state when signing up.
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  // is this correct ?????? i don't want 'details'.... 
  handleClick = (id) => {
    fetch(`/api/fish/${id}`)
      .then(res => res.json())
      .then(json => this.setState({}))
  }

  handleNewQuestion = (question) => {
    this.setState({questionList: [question, ...this.state.questionList]}); // puts the newest question 1st in the array
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() { 
    let user = userService.getUser();
    if (user) {
      questionService.index() 
      .then(questionList => { // refer to line 11 in questionService.js
        this.setState({questionList});
      });
    } 
    this.setState({ user }); // now 'App' holds the 'user' who logged in!!! (dev tools)
  }

  render() {
    let page;

    if (this.state.user && this.state.user.isApplicant) {
      page = <AppHomePage
      user={this.state.user}
      handleNewQuestion={this.handleNewQuestion}
      // history={props.history}
      questionList={this.state.questionList} // ????????????
    /> 
    } else if (this.state.user && !this.state.user.isApplicant) {
      page = <StudHomePage 
      questionList={this.state.questionList} // ????????????
    /> 
    } else if (!this.state.user) {
      page = <WelcomePage />
    }

    return (
      <div className="App">
      {this.state.user ? <NavBar user={this.state.user} /> : null}
      <Router>
        <Switch>
            <Route exact path='/' render={() =>
              page
            } />
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleSignupOrLogin ={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/home' render={(props) => 
              page
            }/>

          }
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
