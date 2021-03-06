import { Request, Response, NextFunction } from "express";

export default function error(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
){
  if(err instanceof Error) {
    return response.status(401).json({error: err.message})
  };

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
};