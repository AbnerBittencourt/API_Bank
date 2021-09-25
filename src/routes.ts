import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginController } from "./controllers/LoginController";
import isAuthenticated from "./middlewares/Authentication";

const router = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();

router.post("/users", createUserController.handle); //ROTA EXCLUSIVA DA API PARA CRIAÇÃO DE USERS

router.get("/dashboard", isAuthenticated);
router.post("/login", loginController.create);

export { router };