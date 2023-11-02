import { Router } from "express";
import { createUserController } from "../controllers";
import { validateBody, verifyEmail } from "../middlewares";
import { userCreateSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "/",
  validateBody(userCreateSchema),
  verifyEmail,
  createUserController
);
usersRoutes.get("/");

usersRoutes.patch("/:id");
usersRoutes.delete("/:id");
