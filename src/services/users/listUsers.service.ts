import { User } from "./../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async () => {
  const userrepository = AppDataSource.getRepository(User);
  const users = userrepository.find();

  return users;
};

export default listUsersService;
