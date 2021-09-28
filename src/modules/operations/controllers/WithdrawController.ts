import { Request, Response } from "express";
import { WithdrawService } from "../services/WithdrawService";

class WithdrawController {
  async handle(request: Request, response: Response) {
    const {account, balance} = request.body;

    const withdrawService = new WithdrawService();

    const data = await withdrawService.execute({ account, balance });

    return response.json(data);
  }
}

export { WithdrawController };