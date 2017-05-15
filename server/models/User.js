import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
    },
    school: {
        type: String,
        // required: true,
    },
    programme: {
        type: String,
        // required: true,
    },
    year: {
        type: String,
        // required: true,
    },
    about: String
});

const User = mongoose.model('User', userSchema);
export default User;