import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { hash } from "bcrypt";
class CreateUserController {
  
  public async handle(request: Request, response: Response){
    const { name, cpf, account, password, balance } = request.body;

    const createUserService = new CreateUserService();

    // const hashedPassword = await hash(password, 6);

    const user = await createUserService.execute({
      name, 
      cpf, 
      account, 
      password, 
      balance
    });

    return response.json(user);
  }
}
export { CreateUserController };