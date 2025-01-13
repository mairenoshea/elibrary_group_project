import {model, Schema} from 'mongoose';

const ReviewSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required']
        },
        description: {
            type: String,
            required: [true, 'Description is required']
        },
        rating: {
            type: Number,
            required: [true, 'Rating is required']
        },
        bookIsbn: {
            type: Number,
            required: [true, 'isbn is required']
        },
        user: {
            type: String,
            required: [true]
        }
    },
    {timestamps: true}
);
const Review = model("Review", ReviewSchema);
export default Review;