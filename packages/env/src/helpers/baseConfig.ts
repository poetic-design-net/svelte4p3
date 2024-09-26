import type { createEnv } from '@t3-oss/env-nextjs'

import { skipValidation } from '@local/env/helpers/skipValidation'

type Props = Partial<Parameters<typeof createEnv>[0]>

/**
 * Generates a base preset configuration object.
 *
 * @returns An object containing the following properties:
 * - `experimental__runtimeEnv`: An empty object intended for experimental runtime environment settings.
 * - `emptyStringAsUndefined`: A boolean flag set to `true` to treat empty strings as `undefined`.
 * - `skipValidation`: A flag to skip validation (determined by Env).
 */
export const baseConfig = {
  emptyStringAsUndefined: true,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  experimental__runtimeEnv: {},
  skipValidation,
} satisfies Props
