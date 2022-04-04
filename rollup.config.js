import pluginPeerDepsExternal from "rollup-plugin-peer-deps-external"
import pluginNodeResolve from "@rollup/plugin-node-resolve"
import pluginCommonjs from "@rollup/plugin-commonjs"
import pluginTypescript from "rollup-plugin-typescript2"
import pluginPostcss from "rollup-plugin-postcss"
import pluginUrl from "@rollup/plugin-url"
import image from "@rollup/plugin-image"

const packageJson = require("./package.json")

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    pluginUrl({
      include: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.svg"],
      limit: Infinity,
      fileName: "[dirname][name][extname]",
    }),
    pluginPeerDepsExternal(),
    pluginTypescript({ useTsconfigDeclarationDir: true }),
    pluginCommonjs({
      extensions: [".js", ".ts"],
    }),
    pluginPostcss({
      extensions: [".css"],
    }),
    pluginNodeResolve({
      browser: true,
    }),
    image(),
  ],
}
