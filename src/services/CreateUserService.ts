//ESTE SERVIÇO NÃO VAI ESTAR DISPONÍVEL PARA O USUÁRIO DO FRONT, ELE FOI CRIADO SOMENTE PARA ADICIONAR USUÁRIOS NO BANCO DE DADOS PELA API
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  cpf: string;
  account: string;
  password: string;
  balance: number;
}

class CreateUserService {

  async execute({ name, cpf, account, password, balance }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    if(!cpf) {
      throw new Error("Digite um CPF válido.")
    };

    if(!account) {
      throw new Error("Digite número de conta válido.")
    };

    const userAlreadyExists = await usersRepository.findOne({
      cpf, account
    });

    if(userAlreadyExists) {
      throw new Error("Já existe um usuário com estes dados.")
    };

    const user = usersRepository.create({
      name, cpf, account, password, balance
    });

    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService }