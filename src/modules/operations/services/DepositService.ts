import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../users/repositories/UsersRepositories";

interface IDeposit {
  account: string;
  balance: number;
}

class DepositService {

  public async execute({ account, balance }: IDeposit) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const accountReceiver = await usersRepository.findByAccount(account);

    if (!accountReceiver) {
        throw new Error('Número de conta inválido.');
    }

    accountReceiver.balance = accountReceiver.balance + balance;
    await usersRepository.save(accountReceiver);

    return accountReceiver;
  }
}

export { DepositService };
