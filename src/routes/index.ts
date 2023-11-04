import { Router } from "express";
import { usersRoutes } from "./users.route";
import { loginRoutes } from "./login.route";
import { categoriesRoutes } from "./categories.route";
import { realEstatesRoutes } from "./realEstates.route";

export const routes: Router = Router();

routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/realEstate", realEstatesRoutes);
