import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Account = new mongoose.Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);