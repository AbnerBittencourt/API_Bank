import { Request, Response } from "express";
import { ListDataService } from "../services/ListDataService";

class ListDataController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listDataService = new ListDataService();

    const data = await listDataService.execute(user_id);
    console.log(data);
    return response.json(data);
  }
}

export { ListDataController };