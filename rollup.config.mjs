import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";

const input = './js/index.js';
const external = [
    '@vue/reactivity',
];

export default defineConfig([
    {
        input,
        plugins: [
            babel({
                babelHelpers: 'bundled',
                presets: [
                    ['@babel/preset-env', {
                        loose: true,
                    }],
                ],
            }),
        ],
        external,
        output: {
            format: 'umd',
            name: 'HL',
            file: './dist/3h-localizer.umd.js',
            globals: {
                '@vue/reactivity': 'Vue',
            },
        },
    },
    {
        input,
        external,
        output: {
            format: 'esm',
            file: './dist/3h-localizer.js',
        },
    },
]);
