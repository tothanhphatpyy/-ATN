import { atom, selector } from "recoil";
import { effects_UNSTABLE } from "@hooks/useRecoilLogger"

export interface CategoryProps {
    company_id: string | number;
    created_at: string | null;
    image: string | null;
    image_url: string | null;
    name: string | null;
    slug: string | null;
    updated_at: string | null;
    x_parent_id: string | null;
    xid: string;
}

export interface SubCategoryProps {
    company_id: string | number;
    created_at: string | null;
    image: string | null;
    image_url: string | null;
    name: string | null;
    slug: string | null;
    subCategories?: object[];
    updated_at: string | null;
    x_parent_id: string | null;
    xid: string;
}

export const categoryAtom = atom<CategoryProps[]>({
    key: `CATEGORY`,
    default: [],
    effects_UNSTABLE,
});

export const subCategorySelector = selector<SubCategoryProps[]>({
    key: 'SUB_CATEGORY',
    get: ({ get }) => {
        const category = get(categoryAtom);
        if (category.length > 0) {
            const categoryTree = createCategoryTree(category);
            return categoryTree;
        }
        return [];
    }
})


//Function build tree category from list all categories
const createCategoryTree = (data, parentId = null) => {
    const tree: any = [];
    data.forEach(item => {
        if (item.x_parent_id === parentId) {
            const subCategories = createCategoryTree(data, item.xid);
            let newItem = { ...item };
            if (subCategories.length > 0) {
                newItem = { ...item, subCategories };
            }
            tree.push(newItem);
        }
    });
    return tree;
}
