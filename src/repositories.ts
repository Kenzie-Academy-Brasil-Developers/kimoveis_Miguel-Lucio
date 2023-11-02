import { AppDataSource } from "./data-source";
import { User } from "./entities";
import { TUserRepo } from "./interfaces";

export const usersRepository: TUserRepo = AppDataSource.getRepository(User);
