import {useParams, Link, useNavigate} from 'react-router-dom';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx'


const ViewReview = (props) => {
    const [review, setReview]= useState({});
    const {review_id}= useParams();
    console.log(review_id);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:9999/api/${review_id}`) 
        .then((res)=>{
            console.log(res.data);
            setReview(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const deleteHandler=()=>{
        axios.delete(`http://localhost:9999/api/${review_id}`)
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
    }
return (
    <>
    <Header pageTitle={`Review of ${review.book_name} by ${review.author}`} customButtonName="Update" customButtonLink={`/${id}/edit`}/>
    <div className="card-container">
        <div className="one-card">
    
    <h3>{review.rating} </h3>
    <h3>{review.title}</h3>
    <h5>{review.text}</h5>
    <div><button onClick={(e)=>deleteHandler(review._id)}>Delete Review</button></div>
    </div>
    </div>
    </>
)
}

export default ViewReview;