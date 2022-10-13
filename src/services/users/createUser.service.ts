import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser } from "../../interfaces/users";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
}: ICreateUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const emailIsExists = users.find((user) => user.email === email);

  if (emailIsExists) {
    throw new Error("Email already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
