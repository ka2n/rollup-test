import { defineConfig as viteDefineConfig, UserConfig } from "vite";

export const defineConfig = (
  config: {
    input: string;
  },
  viteConfig: UserConfig = {}
) =>
  viteDefineConfig({
    ...viteConfig,
    build: {
      ...viteConfig.build,
      rollupOptions: {
        ...viteConfig.build?.rollupOptions,
        input: config.input,
        output: {
          dir: "dist",
          entryFileNames: "[name].js",
        },
      },
    },
  });
