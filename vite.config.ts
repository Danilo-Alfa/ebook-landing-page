import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Para GitHub Pages: coloque o nome do seu repositório aqui
  // Ex: se o repo for github.com/usuario/ebook-landing-page, use "/ebook-landing-page/"
  // Se for um domínio customizado ou username.github.io, use "/"
  base: "/ebook-landing-page/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
