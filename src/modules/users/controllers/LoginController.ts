import { Request, Response }  from "express";
import { CreateLoginService } from "../services/CreateLoginService";

class LoginController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const createSession = new CreateLoginService();

    const user = await createSession.execute({ cpf, password });

    return response.json(user);
  }
}

export { LoginController };