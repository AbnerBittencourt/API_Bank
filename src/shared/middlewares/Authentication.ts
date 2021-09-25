import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../../config/auth";

interface IPayload {
  sub: string;
} 
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("O Token expirou.")
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, authConfig.jwt.secret) as IPayload;

    request.user_id = sub;
    
    return next();
  } catch {
    response.status(401).end();
  }
};