import { Router } from "express";
import { CreateUserController } from "../modules/users/controllers/CreateUserController";
// import isAuthenticated from "./middlewares/Authentication";
//Users
import { LoginController } from "../modules/users/controllers/LoginController";
import { ListDataController } from "../modules/users/controllers/ListDataController";
//Operations
import { DepositController } from "../modules/operations/controllers/DepositController";
import { WithdrawController } from "../modules/operations/controllers/WithdrawController";

const router = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();
const listDataController = new ListDataController();

const depositController = new DepositController();
const withdrawController = new WithdrawController();

router.post("/users", createUserController.handle); //ROTA EXCLUSIVA DA API PARA CRIAÇÃO DE USERS

//Rotas que o front end vai consumir
router.post("/login", loginController.create);
router.get("/dashboard/:id", listDataController.handle);
router.patch("/dashboard/deposit", depositController.handle);
router.patch("/dashboard/withdraw/:id", withdrawController.handle);


export { router };