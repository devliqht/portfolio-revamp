import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import nextConfig from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const coreWebVitalsConfig =
  nextConfig.find(config => config.name === 'next/core-web-vitals') ||
  nextConfig[0];

const eslintConfig = [
  {
    ignores: ['.next/**', 'out/**', 'dist/**', 'node_modules/**'],
  },
  coreWebVitalsConfig,
];

export default eslintConfig;
