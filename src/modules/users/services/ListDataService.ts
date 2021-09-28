import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListDataService {
  public async execute({id}){
    const userRepository = getCustomRepository(UsersRepositories);
    const user = await userRepository.findOne(id);
    if(user){
      return user;            
    }else{
      throw new Error("Usuário não encontrado!");
    }
}
}

export { ListDataService };