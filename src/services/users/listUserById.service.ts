import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IListUserById } from "../../interfaces/users";
import jwt from "jsonwebtoken";

const listUserByIdService = async ({ authorization }: IListUserById) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  if (!authorization) {
    throw new Error("Missing token authorization");
  }

  const token = authorization.split(" ")[1];

  const account = jwt.verify(
    token,
    String(process.env.JWT_SECRET),
    (error, decoded) => {
      if (!decoded) {
        throw new Error("Invalid token");
      }
      const user = users.find((user) => user.email === (<any>decoded).email);

      return user;
    }
  );

  return account;
};

export default listUserByIdService;
