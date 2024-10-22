import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'js/index.js',
    output: {
      file: 'dist/js/bundle.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'js/components/accordion.js',
    output: {
      file: 'dist/js/components/accordion.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'js/components/cookie.js',
    output: {
      file: 'dist/js/components/cookie.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'js/components/devices.js',
    output: {
      file: 'dist/js/components/devices.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'js/components/readMore.js',
    output: {
      file: 'dist/js/components/readMore.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  },
  {
    input: 'js/components/tabs.js',
    output: {
      file: 'dist/js/components/tabs.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      terser()
    ]
  }
];
