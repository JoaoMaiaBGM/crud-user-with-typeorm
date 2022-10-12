import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserByIdController from "../controllers/users/listUserById.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUSer.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUsersController);
userRoutes.get("/me", verifyAuthTokenMiddleware, listUserByIdController);
userRoutes.patch("/me", verifyAuthTokenMiddleware, updateUserController);
userRoutes.delete("/me", verifyAuthTokenMiddleware, deleteUserController);

export default userRoutes;
