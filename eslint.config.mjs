import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js + TS configs
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended"
  ),

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Typescript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],

      // React / Next
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // General JS/TS
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "warn",
      "no-var": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],

      // Imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Prettier
      "prettier/prettier": "error",

      // Unicorn adjustments
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            props: true,
            Props: true,
            ref: true,
            params: true,
            args: true,
            env: true,
            req: true,
            res: true,
          },
          ignore: ["utils"],
        },
      ],
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      ".cache/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];

export default eslintConfig;
