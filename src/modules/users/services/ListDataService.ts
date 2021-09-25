import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListDataService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const data = await usersRepositories.find({
      where: {
        user_id: user_id,
      },
    });

    return data;
  }
}

export { ListDataService };