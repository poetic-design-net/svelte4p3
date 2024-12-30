import type { ClassValue } from 'clsx'
import type { TransitionConfig } from 'svelte/transition'
import { clsx } from 'clsx'
import { cubicOut } from 'svelte/easing'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type FlyAndScaleParams = {
  duration?: number
  start?: number
  x?: number
  y?: number
}

export const flyAndScale = (
  node: Element,
  params?: FlyAndScaleParams,
): TransitionConfig => {
  const defaultParams = { duration: 150, start: 0.95, x: 0, y: -8 }
  const finalParams = { ...defaultParams, ...params }
  const style = getComputedStyle(node)
  const transform = style.transform === 'none' ? '' : style.transform

  const scaleConversion = (
    valueA: number,
    scaleA: [number, number],
    scaleB: [number, number],
  ) => {
    const [minA, maxA] = scaleA
    const [minB, maxB] = scaleB

    const percentage = (valueA - minA) / (maxA - minA)
    const valueB = percentage * (maxB - minB) + minB

    return valueB
  }

  const styleToString = (
    style: Record<string, number | string | undefined>,
  ): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str
      const value = style[key]
      if (typeof value === 'string' || typeof value === 'number') {
        return str + `${key}:${String(value)};`
      }
      return str
    }, '')
  }

  return {
    css: t => {
      const y = scaleConversion(t, [0, 1], [finalParams.y, 0])
      const x = scaleConversion(t, [0, 1], [finalParams.x, 0])
      const scale = scaleConversion(t, [0, 1], [finalParams.start, 1])

      return styleToString({
        opacity: t,
        transform: `${transform} translate3d(${String(x)}px, ${String(y)}px, 0) scale(${String(scale)})`,
      })
    },
    delay: 0,
    duration: finalParams.duration,
    easing: cubicOut,
  }
}
