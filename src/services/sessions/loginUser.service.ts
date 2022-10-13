import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ILoginUser } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUserService = async ({
  email,
  password,
}: ILoginUser): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Wrong email/password");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: "24h",
  });

  return token;
};

export default loginUserService;
