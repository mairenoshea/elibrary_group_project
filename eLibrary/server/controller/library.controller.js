import Book from "../models/book.model.js";

export const addBook = async (req, res, next) => {
  try {
    const RES = await Book.create(req.body);
    res.status(201).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllBooks = async (req, res, next) => {
  try {
    const RES = await Book.find();
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneBookByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Book.findById(id);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneBookByIsbn = async (req, res, next) => {
  const { isbn } = req.params
  try {
    const RES = await Book.findByIsbn(isbn);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const updateOneBook = async (req, res, next) => {
  const { id } = req.params
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const RES = await Book.findByIdAndUpdate(
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

export const deleteBookByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await Book.findByIdAndDelete(id)
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

