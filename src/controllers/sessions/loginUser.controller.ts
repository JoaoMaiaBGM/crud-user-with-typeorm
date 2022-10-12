import { Request, Response } from "express";
import loginUserService from "../../services/sessions/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserService({ email, password });

    return res.status(201).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

export default loginUserController;
