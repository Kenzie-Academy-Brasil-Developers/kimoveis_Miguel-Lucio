import { AppDataSource } from "./data-source";
import { Category, User } from "./entities";
import { TCategoryRepo, TUserRepo } from "./interfaces";

export const usersRepository: TUserRepo = AppDataSource.getRepository(User);

export const categoriesRepository: TCategoryRepo =
  AppDataSource.getRepository(Category);
