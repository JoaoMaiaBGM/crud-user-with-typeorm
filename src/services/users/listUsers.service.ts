import { User } from "./../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async (): Promise<User[]> => {
  const userrepository = AppDataSource.getRepository(User);
  const users = userrepository.find();

  return users;
};

export default listUsersService;
