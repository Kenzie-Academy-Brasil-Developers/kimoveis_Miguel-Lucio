import { Category } from "../entities";
import { TCategoryCreate } from "../interfaces";
import { categoriesRepository } from "../repositories";

export const createCategoryService = async (
  data: TCategoryCreate
): Promise<Category> => {
  const newCategory: Category = categoriesRepository.create(data);
  await categoriesRepository.save(newCategory);

  return newCategory;
};
