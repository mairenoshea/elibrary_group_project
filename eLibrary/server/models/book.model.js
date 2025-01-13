import {model, Schema} from 'mongoose';

const BookSchema = new Schema(
    {
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        isbn: {
            type: Number,
        },
        price: {
            type: Number
        },
        image: {
            type: String
        },
        url: {
            type: String
        }
    },
    {timestamps: true}
);
const Book = model("Book", BookSchema);
export default Book;