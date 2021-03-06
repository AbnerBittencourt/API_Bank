import 'reflect-metadata';
import express from 'express';
import "express-async-errors";
import { router } from './shared/routes';
import cors from 'cors';
import errors from './shared/middlewares/Errors';

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors);

app.listen(3000, () => console.log("Server is running in http://localhost:3000"));

