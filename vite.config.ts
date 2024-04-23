import { resolve } from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [dts({ include: ['src/lib'] }), libInjectCss(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, `./src/lib`),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/main.scss" as *;`,
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/lib/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
});
