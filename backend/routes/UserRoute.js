import express from "express";
// mengimport controller
// method get
import {
    
    getUsers, 
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const router = express.Router();

// endpoint
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;