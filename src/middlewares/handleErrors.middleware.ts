import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { ZodError } from "zod";

export const handleErrors = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.stauts).json({ error: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.errors });
  }

  console.error(err);
  return res.status(500).json({ error: "Internal server error." });
};
