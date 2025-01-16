import {model, Schema} from 'mongoose';

const UserSchema = new Schema(
    {
        realname: {
            type: String,
            required: [true, 'Name is required'],
        },
        userName: {
            type: String,
            required: [true, 'Username is required'],
            maxlength: [30, 'Username can be no more than 30 characters long']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [5, 'Password must be at least 5 characters long']
        },
        confirmPassword: {
            type: String,
            required: [true, 'Must confirm password']
        },
        reviews: {
            type: Array
        },
        image: {
            type: HTMLImageElement
        }
    },
    {timestamps: true}
);
const User = model("User", UserSchema);
export default User;
