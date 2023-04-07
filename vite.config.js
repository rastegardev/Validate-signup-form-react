import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rezarastegar.ir/projects/react-login-form",
  plugins: [react()],
});
