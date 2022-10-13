import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserByIdService = async (id: string) => {
  const useRepository = AppDataSource.getRepository(User);

  const user = await useRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default listUserByIdService;
