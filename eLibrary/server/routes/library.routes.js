import {addBook, getAllBooks, getOneBookByid, updateOneBook, deleteBookByid} from '../controller/library.controller.js';
import {addReview, getAllReviews, getOneReviewByid, updateOne, deleteReviewByid} from '../controller/review.controller.js';
import { Router } from 'express';

const router=Router();


router.route("/Home")
//for displaying all books that have been reviewed on the site
    .get(getAllBooks)
//for sending the post request when the review a book form is submitted
    .post(addReview);

router.route("/library")
    .get(getAllBooks)
    .post(addReview);

router.route("/book/:id")
//for displaying one book and its information and reviews on the site
    .get(getOneBookByid)
//for sending the post request when the review THIS book form is submitted
    .post(addReview)
//for sending the put request when the book itself is updated
    .put(updateOneBook)
//for deleting the book 
    .delete(deleteBookByid);


export default router;

