import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";

const updateUserService = async (id: string, data: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({
    id: id,
  });

  if (!account) {
    throw new Error("User not found");
  }

  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 10);
  }

  await userRepository.update({ id }, data);

  const updatedUser = await userRepository.findOneBy({
    id: id,
  });

  return updatedUser!;
};

export default updateUserService;
