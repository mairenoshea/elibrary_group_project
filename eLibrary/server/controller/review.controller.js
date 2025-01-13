import Review from "../models/review.model.js";

export const addReview = async (req, res, next) => {
  try {
    const RES = await Review.create(req.body);
    res.status(201).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllReviews = async (req, res, next) => {
  try {
    const RES = await Review.find();
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneReviewByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Review.findById(id);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const updateOne = async (req, res, next) => {
  const { id } = req.params
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const RES = await Review.findByIdAndUpdate(
      id,
      req.body,
      options
    );
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const deleteReviewByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Review.findByIdAndDelete(id)
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

