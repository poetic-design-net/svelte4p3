import type { Preview } from '@storybook/react'
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import { preview as basePreview } from '@local/storybook-config'

import '@local/storybook-config/style.css'
import './style.css'
import '@local/ui/styles.css'

const parameters = {
  ...basePreview.parameters,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  options: {
    ...basePreview.parameters?.options,
    storySort: {
      method: 'alphabetical',
      order: [
        'Layouts',
        'Pages',
        'Sections',
        'Typography',
        'Elements',
        'Layout',
        'Forms',
        'Icons',
      ],
    },
  },
}

const preview: Preview = {
  ...basePreview,
  parameters,
}

export default preview

export const decorators = [cssVariablesTheme]
