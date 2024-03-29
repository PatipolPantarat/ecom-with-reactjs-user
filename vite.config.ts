// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     strictPort: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['js-big-decimal']
  // },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:3000",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
