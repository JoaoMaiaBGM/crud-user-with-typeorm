import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserByIdService = async (email: string) => {
  const useRepository = AppDataSource.getRepository(User);

  const users = await useRepository.find();

  const account = users.find((user) => user.email === email);

  return account;
};

export default listUserByIdService;
