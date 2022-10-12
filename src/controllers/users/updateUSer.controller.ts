import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const { password } = req.body;

    const updatedUser = await updateUserService(email, password);

    return res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default updateUserController;
