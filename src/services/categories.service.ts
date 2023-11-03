import { Category } from "../entities";
import { TCategoryArrayReturn, TCategoryCreate } from "../interfaces";
import { categoriesRepository } from "../repositories";

export const createCategoryService = async (
  data: TCategoryCreate
): Promise<Category> => {
  const newCategory: Category = categoriesRepository.create(data);
  await categoriesRepository.save(newCategory);

  return newCategory;
};

export const readCategoriesService =
  async (): Promise<TCategoryArrayReturn> => {
    const categories: TCategoryArrayReturn = await categoriesRepository.find();

    return categories;
  };
