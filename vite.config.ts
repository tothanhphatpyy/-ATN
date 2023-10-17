import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from 'path';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      },
      port: 8080,
    },
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@context': path.resolve(__dirname, './src/context'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@hooks': path.resolve(__dirname, "src/hooks"),
        '@reducers': path.resolve(__dirname, "src/reducers"),
        '@routes': path.resolve(__dirname, "src/routes"),
        '@widgets': path.resolve(__dirname, "src/widgets"),
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        "~leaflet": path.resolve(__dirname, "node_modules/leaflet"),
        '@config': path.resolve(__dirname, "src/config"),
        '@zalo': path.resolve(__dirname, "src/zalo"),
        '@web': path.resolve(__dirname, "src/web"),
        '@atom': path.resolve(__dirname, "src/atom"),
        '@services': path.resolve(__dirname, "src/services"),
        '@i18n': path.resolve(__dirname, "./i18n-config.ts"),
        '@shared': path.resolve(__dirname, "src/shared"),
      },
    },
  });
};
