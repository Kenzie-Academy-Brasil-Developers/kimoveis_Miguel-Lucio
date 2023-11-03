import { Request, Response } from "express";
import { createCategoryService } from "../services";
import { Category } from "../entities";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: Category = await createCategoryService(req.body);

  return res.status(201).json(newCategory);
};
