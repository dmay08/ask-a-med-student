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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      questions: []
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

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() { 
    let user = userService.getUser();
    this.setState({ user }); // now 'App' holds the 'user' who logged in!!! (dev tools)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage />
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

            {this.state.user 
            ?
              <>
              <NavBar user={this.state.user} />
              <Route exact path='/home' render={(props) =>  
                this.state.user && this.state.user.isApplicant // if there's a user AND isApplicant = true
                  // componentDidMount = async > runs AFTER this ternary, so get 'cannot read prop user of null'
                    // checking 'this.state.user' BEFORE '.isApplicant' fixes this problem
                ? 
                <AppHomePage
                  user={this.state.user}
                  history={props.history}
                  questions={this.state.questions} // ????????????
                /> 
                : 
                <StudHomePage 
                  questions={this.state.questions} // ???????????
                /> 
              }/>
              </>
            :
            null
          }
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
