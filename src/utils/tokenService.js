function setToken(token) {
    if (token) {
        localStorage.setItem('token', token); // saves our token
    } else {
        localStorage.removeItem('token');
    }
};

// Added BELOW
function getToken() {
    var token = localStorage.getItem('token');
    if (token) { 
        var payload = JSON.parse( atob( token.split('.')[1] ) );
        if ( payload.exp < Date.now() / 1000 ) { // .exp is a property in the token
            // checked to see if token is EXPIRED (aka 'before' current date)
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token;
};

// Added BELOW
function getUserFromToken() {
    var token = getToken(); // now we have our token (if not 'null')
    return token ? JSON.parse( atob( token.split('.')[1] ) ).user : null;
}

function removeToken() {
    localStorage.removeItem('token');
}

// ADDED BELOW
export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken
};