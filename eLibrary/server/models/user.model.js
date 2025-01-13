import {model, Schema} from 'mongoose';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        userName: {
            type:String,
            required: [true, 'Username is required.'],
            maxlength: [30, 'Username can be no more than 30 characters long.']
        },
        password: {
            type:String,
            required: [true, 'Password is required.'],
            minlength: [5, 'Password must be at least 5 characters long.']
        }
    },
    {timestamps: true}
);
const User = model("User", UserSchema);
export default User;