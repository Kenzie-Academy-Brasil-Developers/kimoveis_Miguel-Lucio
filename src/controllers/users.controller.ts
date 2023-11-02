import { Request, Response } from "express";
import { ReturningStatementNotSupportedError } from "typeorm";
import { TUserReturn } from "../interfaces";
import { createUserService } from "../services";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: TUserReturn = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};
