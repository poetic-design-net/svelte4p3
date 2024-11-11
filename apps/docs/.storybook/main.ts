import path from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { ProvidePlugin } from 'webpack'

import { config as baseConfig } from '@local/storybook-config'

const config: StorybookConfig = {
  ...baseConfig,
  addons: [
    ...(baseConfig.addons ?? []),
    '@etchteam/storybook-addon-css-variables-theme',
  ],
  webpackFinal: config => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve?.plugins ?? []),
        new TsconfigPathsPlugin({
          configFile: path.join(import.meta.dirname, '../tsconfig.json'),
        }),
      ],
    }

    config.plugins = [
      ...(config.plugins ?? []),
      new ProvidePlugin({
        React: 'react',
      }),
    ]

    return config
  },
}

export default config
