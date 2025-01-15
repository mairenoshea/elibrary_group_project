import { addUser, getAllUsers, getOneUserByid, updateOneUser, deleteUserByid} from "../controller/user.controller";
import { Router } from 'express';

const router=Router();

router.route("/")
    .get(getAllUsers)
    .post(addUser);

router.route("/view/profile/:id")
//for displaying the user and their information
    .get(getOneUserByid)
//for updating the user and their information
    .put(updateOneUser)
//for deleting a user 
    .delete(deleteUserByid);

    
export default router;