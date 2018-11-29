// Added BELOW v
import tokenService from './tokenService';

const BASE_URL = '/api/users/';


function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  // "3) Persist the token (JWT) on the client."
  .then(({ token }) => { // destructured
    tokenService.setToken(token); // now LOCAL STORAGE gets a kvp token (dev tools)
  }); 
}

// added BELOW v (entire function)
function getUser() {
  return tokenService.getUserFromToken(); // now need to write 'getUser...' func (in 'tokenService')
}

// helps implement LOG OUT functionality (handleLogout = app.jsx)
function logout() {
  tokenService.removeToken();
}

// helps implement LOGIN functionality
function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then(({ token }) => { // destructured
    tokenService.setToken(token); // now LOCAL STORAGE gets a kvp token (dev tools)
  }); 
}

export default {
  signup,
  getUser,
  logout,
  login
};