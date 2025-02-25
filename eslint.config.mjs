import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended" // Add Prettier integration
  ),
  {
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error", // Ensure Prettier issues are treated as ESLint errors
    },
  },
];

export default eslintConfig;
