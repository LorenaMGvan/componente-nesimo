import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'prueba-nesimo',
  testing: {
    transform: {
      '^.+\\.(ts|tsx|jsx|js)$': '<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js'
    }
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global/global.css'
};
