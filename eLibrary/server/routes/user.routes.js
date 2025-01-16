import { addUser, getAllUsers, getOneUserByid, updateOneUser, deleteUserByid} from "../controller/user.controller.js";
import { Router } from 'express';

const userRouter=Router();

userRouter.route("/")
    .get(getAllUsers)
    .post(addUser)

userRouter.route("/users")
    .get(getAllUsers)
    .post(addUser)

userRouter.route("/users/:id")
    .get(getOneUserByid)
    .put(updateOneUser)
    .delete(deleteUserByid)

userRouter.route("/view/profile/:id")
//for displaying the user and their information
    .get(getOneUserByid)
//for updating the user and their information
    .put(updateOneUser)
//for deleting a user 
    .delete(deleteUserByid)

    
export default userRouter;