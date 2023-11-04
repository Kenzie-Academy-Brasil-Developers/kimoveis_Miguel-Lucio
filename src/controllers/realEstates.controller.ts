import { Request, Response } from "express";
import { createRealEstateService } from "../services";
import { RealEstate } from "../entities";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};
