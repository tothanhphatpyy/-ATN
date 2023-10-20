import axios from "axios";
import { useRecoilState } from "recoil"
import { useMount, useRequest } from "ahooks";
import { ProvinceProps, provinceAtom } from "@atom/province/province";

export const useProvince= () => {
    const [province, setProvince] = useRecoilState<ProvinceProps[]>(provinceAtom);

    //api lấy danh sách 63 tỉnh VN
    const requestProvince = async () => {
        const response = await axios.get(`https://provinces.open-api.vn/api/?depth=1`);
        return response;
    }

    const getProvince = useRequest(() => requestProvince(), {
        cacheKey: "province",
        manual: true,
        onSuccess: (res) => setProvince(res.data),
    });

    const getProvinceByCode = (code: string) => {
        let item = province.filter((item) => item.code == code)
        return item;
    }

    const removeProvinceByCode = (code: string) => {
        let newList = province.filter((item) => item.code != code)
        setProvince(newList);
    }

    useMount(() => {
        if(province.length < 1){
            getProvince.runAsync();
        }
    })

    return {province, setProvince, getProvinceByCode, removeProvinceByCode};
}