import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserByIdController from "../controllers/users/listUserById.controller";
import listUsersController from "../controllers/users/listUsers.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUsersController);
userRoutes.get("/me", listUserByIdController);

export default userRoutes;