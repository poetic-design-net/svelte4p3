declare module 'svelte-tiny-slider' {
  export type TinySliderProps = {
    autoplay?: boolean
    controls?: boolean
    items?: number
    loop?: boolean
    mouseDrag?: boolean
    nav?: boolean
    responsive?: Record<
      number,
      {
        items?: number
        slideBy?: 'page' | number
      }
    >
    slideBy?: 'page' | number
  }

  export default class TinySlider extends Component<TinySliderProps> {}
}
