import {methods} from '../controllers/library.controller.js';
import { Router } from 'express';

const router=Router();


router.route("/")
//for displaying all books that have been reviewed on the site
    .get(getAllBooks)
//for sending the post request when the review a book form is submitted
    .post(createReview);

router.route("/books/over/:minReview")
    .get(getBooksWithAverageReviewsOver)

router.route("/book/:book_id")
    .get(getOneBook)
   
router.route("/user/:user_id/reviews")
   .get(getAllUsersReviews) 
   .post(createReview);



export default router;

