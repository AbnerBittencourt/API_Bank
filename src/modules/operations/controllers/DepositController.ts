import { Request, Response } from "express";
import { DepositService } from "../services/DepositService";

class DepositController {
  public async handle(request: Request, response: Response){
    const { account, balance } = request.body;

    const depositService = new DepositService();

    const user = await depositService.execute({ 
      account,
      balance
    });

    return response.json(user);
  }
}

export { DepositController };