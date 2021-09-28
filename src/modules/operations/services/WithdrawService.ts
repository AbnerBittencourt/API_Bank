import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../users/repositories/UsersRepositories";

interface IWithdraw {
  id: string;
  account: string; 
  balance: number;
} 
class WithdrawService {

  public async execute( { id, account, balance}: IWithdraw ){
    const userRepository = getCustomRepository(UsersRepositories);
    const user = await userRepository.findByAccount(account);

    if(id != user.id || account != user.account) {
      throw new Error("Inválido!");
    }

    if (user.balance >= balance) {
      user.balance = user.balance - balance; 
    } else {
      throw new Error("Saldo insuficiente.")
    }

    await userRepository.save(user);
    return user;
  }
}

export { WithdrawService };
