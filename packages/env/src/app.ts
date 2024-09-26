import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { baseConfig } from '@local/env/helpers/baseConfig'

export const env = createEnv({
  ...baseConfig,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
  shared: {
    NEXT_PUBLIC_APP_ENV: z
      .enum(['production', 'staging', 'local'])
      .default('local'),
  },
})
