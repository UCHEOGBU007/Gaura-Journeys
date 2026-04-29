/// <reference types="node" />
import { defineConfig } from "vite";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: any) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
      // Added explicit alias for assets to help with resolution
      "@assets": path.resolve(__dirname, "./src/assets", ".src/public"),
    },
  },

  // Build configuration to ensure Vercel maps the output correctly
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure large images don't get base64 encoded into the JS bundle
    assetsInlineLimit: 4096,
  },

  // Expanded to include common image formats missing from your original file
  assetsInclude: [
    "**/*.svg",
    "**/*.csv",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.webp",
    "**/*.ico",
  ],
});
