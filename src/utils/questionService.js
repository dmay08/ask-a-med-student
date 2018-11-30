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

function create(question) {
    return fetch(BASE_URL, getAuthRequestOptions('POST', {content: question}))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('New Question failed');
    })
    .then(questionList => questionList)
}

/* -------------- Helper Functions ---------------*/

function getAuthRequestOptions(method, body) {
    var options = { // return an objet literal
        method,
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    };
    if (body) {
        options.headers.append('Content-Type', 'application/json');
        options.body = JSON.stringify(body);
    }
    return options;
}

export default {
    index,
    create
};