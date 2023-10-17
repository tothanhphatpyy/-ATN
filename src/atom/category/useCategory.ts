import { useRecoilState, useRecoilValue } from "recoil"
import { useMount, useRequest } from "ahooks";
import { getAllCategoriesApi } from "@services/api/categoryApi";
import { CategoryProps, SubCategoryProps, categoryAtom, subCategorySelector } from "./category";

export const useCategory = () => {
    const [category, setCategory] = useRecoilState<CategoryProps[]>(categoryAtom);
    const subCategories = useRecoilValue<SubCategoryProps[]>(subCategorySelector)

    const requestGetAllCategories = useRequest(() => getAllCategoriesApi(), {
        cacheKey: "get-all-categories",
        manual: true,
        onSuccess: (res: any) => setCategory(res.data.categories),
        onError: (err: any) => console.log("Api category", err.message)
    });

    useMount(() => {
        if (category.length < 1) {
            requestGetAllCategories.runAsync();
        }
    })

    return { category, subCategories, requestGetAllCategories, setCategory };
}