import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await deleteUserService(id);

    return res.status(204).json({
      message: "User deleted eith success!",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};
export default deleteUserController;
