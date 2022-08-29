// import { defineConfig } from "vite"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { ViteMinifyPlugin } from "vite-plugin-minify"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), ViteMinifyPlugin({})],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		css: true,
	},
})
