import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  cpf: string;
  password: string;
}

interface IUserSession {
  user: User;
}

class CreateLoginService {

  public async execute({ cpf, password }: IUserRequest): Promise<IUserSession> {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findByCPF(cpf);

    if(!user) {
      throw new Error("CPF ou senha inválidos.");
    }
    console.log(user.password)
    if(password != user.password) {
      throw new Error("CPF ou senha inválidos.");
    }

    return { user };
  }
}

export { CreateLoginService }