import { Router } from "express";
import { usersRoutes } from "./users.route";
import { loginRoutes } from "./login.route";

export const routes: Router = Router();

routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);
