import { Request, Response } from "express";
import { ListDataService } from "../services/ListDataService";

class ListDataController {
  
  public async handle(request:Request, response:Response):Promise<Response>{
    const listDataService = new ListDataService();
    const {id} = request.params;
    const data = await listDataService.execute({id});
    return response.status(200).json(data);
  } 
}

export { ListDataController };