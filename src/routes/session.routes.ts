import { Router } from "express";
import loginUserController from "../controllers/sessions/loginUser.controller";

const loginRouter = Router();

loginRouter.post("", loginUserController);

export default loginRouter;
