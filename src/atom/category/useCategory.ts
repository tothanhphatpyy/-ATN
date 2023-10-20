import { useRecoilState } from "recoil"
import { useMount, useRequest } from "ahooks";
import { getAllCategoryApi } from "@services/api/categoryApi";
import { CategoryProps, categoryAtom } from "./category";

export const useCategory = () => {
    const [category, setCategory] = useRecoilState<CategoryProps[]>(categoryAtom);

    const requestCategory = useRequest(() => getAllCategoryApi(), {
        cacheKey: "all-categories",
        manual: true,
        onSuccess: (res: any) => {setCategory(res.data.categories)},
    });

    useMount(() => {
        if(category.length < 1){
            requestCategory.runAsync();
        }
    })

    return { category };
}