import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/exportModules.js',
  output: {
    file: 'dist/js/bundler.js',
    format: 'esm',
    sourcemap: false,
  },

  plugins: [
    del({ targets: 'dist/js/*' }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // Исключаем node_modules
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
