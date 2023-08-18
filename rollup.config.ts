import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { globbySync } from "globby";
import { defineConfig, RollupOptions } from "rollup";

export default defineConfig([
  ...globbySync(["src/entrypoints/**.ts"]).map((entry) => {
    return {
      input: entry,
      output: {
        name: entry.replace(/src\/entrypoints\/(.*)\.ts/, "$1"),
        file: entry.replace(/src\/entrypoints\/(.*)\.ts/, "dist/$1.js"),
        format: "iife",
      },
      plugins: [resolve(), commonjs(), typescript()],
    } satisfies RollupOptions;
  }),
]);
