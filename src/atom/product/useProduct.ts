import { useRecoilState } from "recoil"
import { useAsyncEffect, useRequest } from "ahooks";
import { useWarehouse } from "@atom/warehouse/useWarehouse";
import { getAllProductsApi, getProductsByPageApi } from "@services/api/productApi";
import { productAtom } from "./product"

export const useProduct = () => {
    const [product, setProduct] = useRecoilState(productAtom);
    const { warehouseId } = useWarehouse();

    const requestAllProducts = useRequest((warehouseId) => getAllProductsApi(warehouseId), {
        cacheKey: "get-all-products",
        manual: true,
        onSuccess: (res: any) => setProduct(res.data),
        onError: (err: any) => console.log("Api all products", err.message)
    });

    const requestGetProductsByPage = useRequest((page, limit = 10) => getProductsByPageApi(page, limit, warehouseId as string), {
        cacheKey: "get-products-by-page",
        manual: true,
        onSuccess: (res: any) => setProduct([...product, ...res.data]),
        onError: (err: any) => console.log("Api products by page", err.message)
    });

    useAsyncEffect(async () => {
        const id = await warehouseId;
        if (id && product.length < 1) {
            requestAllProducts.runAsync(id);
        }
    }, [warehouseId])

    return {
        product,
        requestAllProducts,
        requestGetProductsByPage,
        setProduct,
    }
}