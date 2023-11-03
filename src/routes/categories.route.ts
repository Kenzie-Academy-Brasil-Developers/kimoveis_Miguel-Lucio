import { Router } from "express";
import {
  validateBody,
  verifyCategoryName,
  verifyPermissions,
  verifyToken,
} from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { createCategoryController } from "../controllers";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "/",
  verifyToken,
  verifyPermissions,
  validateBody(categoryCreateSchema),
  verifyCategoryName,
  createCategoryController
);
categoriesRoutes.get("/");

categoriesRoutes.get("/:id/realEstate");
