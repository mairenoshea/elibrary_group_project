import {addBook, getAllBooks, getOneBookByid, getOneBookByIsbn, updateOneBook, deleteBookByid} from '../controller/library.controller.js';
import {addReview, getAllReviews, getOneReviewByid, updateOne, deleteReviewByid} from '../controller/review.controller.js';
import { Router } from 'express';

const libraryRouter=Router();


libraryRouter.route("/Home")
//for displaying all books that have been reviewed on the site
    .get(getAllBooks)
//for sending the post request when the review a book form is submitted
    .post(addReview);

libraryRouter.route("/library")
    .get(getAllBooks)
    .post(addReview);




libraryRouter.route("/books/:isbn")
    .get(getOneBookByIsbn)
    //for sending the post request when the review THIS book form is submitted
    .post(addReview)
//for sending the put request when the book itself is updated
    .put(updateOneBook)

export default libraryRouter;

