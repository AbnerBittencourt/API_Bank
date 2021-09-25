import { User } from "../../users/entities/User";
import { getCustomRepository } from "typeorm";
import { OperationsRepositories } from "../repositories/OperationsRepositories";

interface IDeposit {
  account: string;
  balance: number;
}

class DepositService {

    public async execute({ account, balance }: IDeposit): Promise<User> {
        const atmRepository = getCustomRepository(OperationsRepositories);

        const atmReceiver = await atmRepository.findOne(
            {
                where: {
                    account: `${account}`
                }
            })

        if (!atmReceiver) {
            throw new Error('Cant find user');
        }

        atmReceiver.balance = atmReceiver.balance + balance;
        await atmRepository.save(atmReceiver);

        return atmReceiver;
    }
}

export { DepositService };
