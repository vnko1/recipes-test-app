export interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface ICategories {
  categories: Array<ICategory>;
}
