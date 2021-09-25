import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListDataService {
  public async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const data = await usersRepositories.findOne({
      where: {
        id: user_id,
      },
    });

    return data;
  }
}

export { ListDataService };