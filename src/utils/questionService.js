import tokenService from './tokenService';

const BASE_URL = '/api/questions'

function index() {
    return fetch(BASE_URL, getAuthRequestOptions('GET')) // base_url = where we get our questions from
    .then(res => {
        if (res.ok) return res.json(); // if all is good > go to the next line?
        throw new Error('Authorization Required'); // if token is invalid
    })
    .then(questionList => questionList);
}

function create() {
    return fetch(BASE_URL, getAuthRequestOptions('POST'))
    // missing another additional 'header' called 'content-type: application/json'
        // check high scores
    // also missing 'question content' (body: jsonStringify({content-(string)}))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Authorization Required');
    })
    .then(questionList => questionList)
}

/* -------------- Helper Functions ---------------*/

function getAuthRequestOptions(method) {
    return { // return an objet literal
        method,
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    }
}

export default {
    index
};