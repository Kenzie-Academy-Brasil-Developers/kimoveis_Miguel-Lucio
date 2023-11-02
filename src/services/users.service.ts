import { User } from "../entities";
import { TUserCreate, TUserReturn } from "../interfaces";
import { usersRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const newUser: User = usersRepository.create(data);
  await usersRepository.save(newUser);

  return userReturnSchema.parse(newUser);
};
