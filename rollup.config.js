import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import bundleSize from 'rollup-plugin-bundle-size';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
const dts = require('rollup-plugin-dts');
const packageJson = require('./package.json');

export default [
  {
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      'ethers',
      'react-router-dom',
    ],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        interop: 'auto',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        interop: 'auto',
      },
    ],
    plugins: [
      css(),
      svgr({
        exportType: 'named',
        memo: true,
      }),
      image(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser(),
      bundleSize(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
];
