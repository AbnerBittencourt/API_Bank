import { EntityRepository, Repository } from "typeorm";
import { Operation } from "../entities/Operation";

@EntityRepository(Operations)
class OperationsRepositories extends Repository<User>{
  
  public async findByCPF(cpf: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { cpf }
    });

    return user;
  }
}

export { OperationsRepositories }