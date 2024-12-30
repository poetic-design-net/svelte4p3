declare module 'swiper/element/bundle' {
  export function register(): void
}

declare module 'swiper/css'
declare module 'swiper/css/pagination'
declare module 'swiper/css/effect-fade'

declare global {
  namespace JSX {
    type IntrinsicElements = {
      'swiper-container': {
        'autoplay-delay'?: string
        'autoplay-disable-on-interaction'?: string
        'autoplay-pause-on-mouse-enter'?: string
        class?: string
        effect?: string
        pagination?: string
        'pagination-clickable'?: string
        'slides-per-view'?: string
        'space-between'?: string
      }
      'swiper-slide': {
        class?: string
        style?: string
      }
    }
  }
}
