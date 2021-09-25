import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
  
  public async findByID(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { id }
    });
    return user;
  }

  public async findByCPF(cpf: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { cpf }
    });
    return user;
  }

  public async findByAccount(account: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { account }
    });
    return user;
  }
}

export { UsersRepositories }