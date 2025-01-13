import User from "../models/user.model.js";

export const addUser = async (req, res, next) => {
  try {
    const RES = await User.create(req.body);
    res.status(201).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    const RES = await User.find();
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const getOneUserByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await User.findById(id);
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const updateOneUser = async (req, res, next) => {
  const { id } = req.params
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const RES = await User.findByIdAndUpdate(
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

export const deleteUserByid = async (req, res, next) => {
  const { id } = req.params
  try {
    const RES = await User.findByIdAndDelete(id)
    res.status(200).json(RES);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

