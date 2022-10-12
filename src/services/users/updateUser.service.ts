import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const updateUserService = async (email: string, password: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);
  console.log(account);

  const newPassword = bcrypt.hashSync(password, 10);

  await userRepository.update(account!.id, { password: newPassword });

  return true;
};

export default updateUserService;
