var mongoose = require('mongoose');
// Added BELOW v
var bcrypt = require('bcrypt');

// Added BELOW v
const SALT_ROUNDS = 6;


var userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  isApplicant: {type: String, default: true} // lets me simply type 'isApplicant' for ternaries
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

// Added BELOW v 
// "1) Refactor the server to hash the password when a user signs up"
userSchema.pre('save', function(next) { // before(pre) doc is saved > run this code
  var user = this; // this = this DOCUMENT we're checking
  if (!user.isModified('password')) return next(); // if no password change > we're out of here! (next)
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // override the user provided password with the hash
    user.password = hash;
    next(); // don't call save (b/c we got here by ALREADY calling 'save' - it's what made this code run)
  });
}); 

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb); // comparing password to ENCRYPTED password (this.password)
};


module.exports = mongoose.model('User', userSchema);