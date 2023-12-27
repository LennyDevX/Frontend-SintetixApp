import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Puedes agregar más campos según lo necesites
});

const User = mongoose.model('User', UserSchema);

export default User;