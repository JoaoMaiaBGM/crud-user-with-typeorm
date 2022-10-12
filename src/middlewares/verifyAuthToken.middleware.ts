import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (error: any, decoded: any) => {
        req.userEmail = decoded.email;
        next();
      }
    );
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default verifyAuthTokenMiddleware;
