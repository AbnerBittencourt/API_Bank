import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
  
  public async findByCPF(cpf: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { cpf }
    });

    return user;
  }
}

export { UsersRepositories }