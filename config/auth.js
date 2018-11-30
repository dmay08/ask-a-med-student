// middleware page!
    // we'll assign this middleware function to 'module.exports'
var jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
    //3 ways to verify for token on the server (to PROTECT server-side routes)
    var token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                next(err);
            } else {
                req.user = decoded.user // decoded = 'payload' > want user
                next();
            }
        });
    } else {
        next();
    }
}

// now MOUNT middleware on 'server.js'