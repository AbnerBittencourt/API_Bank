import { Router } from "express";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
import { ListDataController } from "../modules/users/controllers/ListDataController";
import { LoginController } from "../modules/users/controllers/LoginController";
import isAuthenticated from "./middlewares/Authentication";

const router = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();
const listDataController = new ListDataController();

router.post("/users", createUserController.handle); //ROTA EXCLUSIVA DA API PARA CRIAÇÃO DE USERS

router.get("/dashboard", isAuthenticated, listDataController.handle);
router.post("/login", loginController.create);



export { router };