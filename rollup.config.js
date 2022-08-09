import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rollup/plugin-eslint';
// import clear from 'rollup-plugin-clear';

export default {
  input: 'src/index.ts', // 打包入口
  output: {
    // 打包出口
    file: 'dist/index.js',
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: 'cxl-hooks', // cdn方式引入时挂载在window上面用的就是这个名字
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'react-dom',
    },
  },
  plugins: [
    // 打包插件
    // clear({
    //   targets: ['dist'],
    // }),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    eslint({
      // throwOnError: true, // 抛出异常并阻止打包
      include: ['src/**'],
      exclude: ['node_modules/**'],
    }),
    babel({ babelHelpers: 'bundled' }), // babel配置,编译es6
    //压缩体积
    terser(),
    //第三方依赖
    peerDepsExternal(),
  ],
  externals: ['react'],
};
