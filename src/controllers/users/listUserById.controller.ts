import { Request, Response } from "express";
import listUserByIdService from "../../services/users/listUserById.service";

const listUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await listUserByIdService({
      authorization: req.headers.authorization,
    });

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

export default listUserByIdController;