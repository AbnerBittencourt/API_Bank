import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import authConfig from "../../../config/auth";

interface IUserRequest {
  cpf: string;
  password: string;
}

interface IUserSession {
  user: User;
  token: string;
}

class CreateLoginService {

  public async execute({ cpf, password }: IUserRequest): Promise<IUserSession> {
    const usersRepository = getCustomRepository(UsersRepositories);
   
    const user = await usersRepository.findByCPF(cpf);

    if(!user) {
      throw new Error("CPF ou senha inválidos.");
    }

    const passwordConfirmed = await compare(password, user.password);

    if(!passwordConfirmed) {
      throw new Error("CPF ou senha inválidos.");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    });

    return { user, token };
  }
}

export { CreateLoginService }