import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'esm',
      sourcemap: true,
    }
  },
  {
    input: 'src/utils/accordion.js',
    output: {
      file: 'dist/utils/accordion.js',
      format: 'es',
      sourcemap: false,
    }
  },
  {
    input: 'src/utils/cookie.js',
    output: {
      file: 'dist/utils/cookie.js',
      format: 'es',
      sourcemap: false,
    }
  },
  {
    input: 'src/utils/devices.js',
    output: {
      file: 'dist/utils/devices.js',
      format: 'es',
      sourcemap: false,
    }
  },
  {
    input: 'src/utils/readMore.js',
    output: {
      file: 'dist/utils/readMore.js',
      format: 'es',
      sourcemap: false,
    }
  },
  {
    input: 'src/utils/tabs.js',
    output: {
      file: 'dist/utils/tabs.js',
      format: 'es',
      sourcemap: false,
    }
  }
];
