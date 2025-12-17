import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
    ...nextVitals,
    ...nextTs,

    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

    {
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooks,
            prettier: eslintPluginPrettier,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            "no-console": "warn",
            "no-debugger": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error",
            "no-var": "error",
            eqeqeq: ["error", "always"],
            curly: ["error", "multi-line"],

            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "warn",

            "react/self-closing-comp": "error",
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react-hooks/exhaustive-deps": "warn",

            "prettier/prettier": "error",
        },
    },

    prettier,
]);
