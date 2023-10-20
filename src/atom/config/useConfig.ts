import { useRecoilState } from "recoil";
import { ConfigProps, configAtom } from "@atom/config/config";

export const useConfig = () => {
    const [config, setConfig] = useRecoilState<ConfigProps>(configAtom);

    return { config, setConfig };
}