export const HERO_LAYOUTS = {
  CENTERED: 'centered',
  DEFAULT: 'default',
  FULL_WIDTH: 'full-width',
} as const

export const FEATURE_LAYOUTS = {
  DEFAULT: 'default',
  GRID: 'grid',
  LIST: 'list',
} as const

export const ICONS = {
  BACKUP: 'backup',
  DEPLOY: 'deploy',
  LOGIN: 'login',
  SSL: 'ssl',
} as const

export const BENTO_LAYOUTS = {
  DEFAULT: 'default',
  TALL: 'tall',
  WIDE: 'wide',
} as const

export const INTRO_LAYOUTS = {
  CENTERED: 'centered',
  DEFAULT: 'default',
  FULL_WIDTH: 'full-width',
} as const

type HeroLayout = (typeof HERO_LAYOUTS)[keyof typeof HERO_LAYOUTS]
type IconType = (typeof ICONS)[keyof typeof ICONS]
type FeatureLayout = (typeof FEATURE_LAYOUTS)[keyof typeof FEATURE_LAYOUTS]
type BentoLayout = (typeof BENTO_LAYOUTS)[keyof typeof BENTO_LAYOUTS]
type IntroLayout = (typeof INTRO_LAYOUTS)[keyof typeof INTRO_LAYOUTS]

export type Media = {
  alt?: string
  metadata?: {
    backgroundSettings?: {
      angle?: number
      color?: string
      from?: string
      to?: string
      type?: 'color' | 'gradient' | 'image' | 'video'
    }
  }
  mimeType?: string
  url?: null | string
}

export type IntroLink = {
  text: string
  url: string
}

export type IntroStat = {
  label: string
  value: string
}

export type IntroProps = {
  backgroundImage?: Media
  blockName?: string
  description: string
  headline: string
  id?: string
  layout?: IntroLayout
  links?: IntroLink[]
  stats?: IntroStat[]
}

export type CTA = {
  link?: null | string
  text?: null | string
}

export type BackgroundSettings = {
  angle?: number
  color?: string
  from?: string
  to?: string
  type: 'color' | 'gradient' | 'image' | 'video'
}

export type HeroProps = {
  accent?: {
    link?: null | string
    linkText?: null | string
    text?: null | string
  }
  backgroundImage?: Media | string
  backgroundType?: 'color' | 'gradient' | 'image' | 'video'
  blockName?: string
  cta?: {
    link?: string
    text?: string
  }
  fullscreen?: boolean
  headline?: string
  id?: string
  layout?: HeroLayout
  learnMoreLink?: string
  learnMoreText?: string
  overlay?: {
    color?: string
    gradient?: string
    opacity?: number
  }
  subheadline?: string
}

export type BlockType =
  | 'bento-grid'
  | 'blogPosts'
  | 'cardSlider'
  | 'contentSection'
  | 'cta'
  | 'features'
  | 'hero'
  | 'howItWorks'
  | 'intro'
  | 'newsletter'
  | 'pricing'
  | 'simpleButton'
  | 'simpleImage'
  | 'testimonial'
  | 'videoEmbed'

export type FeatureItem = {
  description: string
  icon: IconType
  linkText?: string
  linkUrl?: string
  title: string
}

export type FeaturesProps = {
  accentHeadline?: string
  backgroundColor?: string
  blockName?: string
  features?: FeatureItem[]
  headline?: string
  id?: string
  image?: {
    alignment: 'center' | 'offset'
    file: Media
    position: 'bottom' | 'centered' | 'left' | 'right' | 'top'
  }
  layout?: FeatureLayout
  subheadline?: string
}

export type CTAButton = {
  link: string
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'secondary'
}

export type CTALayout =
  | 'centered'
  | 'default'
  | 'fullwidth'
  | 'imageBottom'
  | 'imageLeft'
  | 'imageRight'
  | 'imageTop'

export type CTAProps = {
  backgroundImage?: Media
  blockName?: string
  fullwidth?: boolean
  heading: string
  id?: string
  image?: {
    alignment: 'center' | 'offset'
    file: Media
    position: 'bottom' | 'centered' | 'left' | 'right' | 'top'
  }
  layout?: CTALayout
  overlay?: {
    color?: string
    opacity?: number
  }
  primaryButton?: CTAButton
  secondaryButton?: CTAButton
  text?: string
}

export type BentoGridItem = {
  description: string
  image?: Media | string
  layout: BentoLayout
  title: string
}

export type BentoGridBlockProps = {
  backgroundColor?: string
  blockName?: string
  id?: string
  items: BentoGridItem[]
  subtitle?: string
  title?: string
}

export type PricingFeature = {
  id: string
  text: string
}

export type PricingPlan = {
  ctaLink: string
  ctaText: string
  description?: string
  features: PricingFeature[]
  id: string
  isHighlighted: boolean
  name: string
  price: string
}

export type PricingProps = {
  blockName?: string
  description?: string
  id?: string
  layout?: string
  plans: PricingPlan[]
  title: string
}

export type Testimonial = {
  image: {
    url: string
  }
  layout?: string
  name: string
  position: string
  quote: string
  testimonialheadline?: string
}

export type TestimonialBlock = {
  headline?: string
  layout?: string
  testimonials: Testimonial[]
}

export type CardSliderCard = {
  number?: number
  text?: string
}

export type CardSliderProps = {
  content?: {
    backgroundImage?: Media
    cards?: CardSliderCard[]
    description?: string
    title?: string
  }
  sliderSettings?: {
    autoplay?: {
      delay?: number
      enabled?: boolean
      pauseOnHover?: boolean
    }
    cardWidth?: number
    loop?: boolean
    navigation?: 'arrows' | 'both' | 'dots' | 'none'
    spaceBetween?: number
  }
}

export type BlogPost = {
  category: string
  image: {
    url: string
  }
  readTime: string
  title: string
}

export type BlogPostsProps = {
  blockName?: string
  description: string
  id?: string
  layout?: string
  posts: BlogPost[]
  title: string
}

export type SimpleButtonProps = {
  link: string
  style: 'default' | 'destructive' | 'ghost' | 'link' | 'outline' | 'secondary'
  text: string
}

export type VideoEmbedProps = {
  videoFile?: Media
  videoId?: string
  videoType: 'upload' | 'vimeo' | 'youtube'
}

export type SimpleImageProps = {
  altText: string
  image: Media
}

export type Block = {
  blockType: BlockType
} & (
  | ({ blockType: 'bento-grid' } & BentoGridBlockProps)
  | ({ blockType: 'blogPosts' } & BlogPostsProps)
  | ({ blockType: 'cardSlider' } & CardSliderProps)
  | ({ blockType: 'cta' } & CTAProps)
  | ({ blockType: 'features' } & FeaturesProps)
  | ({ blockType: 'hero' } & HeroProps)
  | ({ blockType: 'howItWorks' } & HowItWorksProps)
  | ({ blockType: 'intro' } & IntroProps)
  | ({ blockType: 'pricing' } & PricingProps)
  | ({ blockType: 'simpleButton' } & SimpleButtonProps)
  | ({ blockType: 'simpleImage' } & SimpleImageProps)
  | ({ blockType: 'testimonial' } & TestimonialBlock)
  | ({ blockType: 'videoEmbed' } & VideoEmbedProps)
)

export type HowItWorksStep = {
  description: string
  number: string
  title: string
}

export type RichTextNode = {
  blockName?: string
  blockType?: BlockType
  children?: RichTextNode[]
  direction?: null | string
  fields?: {
    altText?: string
    blockName?: string
    blockType?: string
    image?: {
      alt?: string
      createdAt?: string
      filename?: string
      filesize?: number
      height?: number
      id?: string
      mimeType?: string
      updatedAt?: string
      url?: string
      width?: number
    }
    link?: string
    style?:
      | 'default'
      | 'destructive'
      | 'ghost'
      | 'link'
      | 'outline'
      | 'secondary'
    text?: string
    videoFile?: Media
    videoId?: string
    videoType?: 'upload' | 'vimeo' | 'youtube'
  }
  format?: number
  indent?: number
  listType?: string
  relationTo?: string
  tag?: string
  text?: string
  textFormat?: number
  textStyle?: string
  type: string
  value?: {
    alt: string
    id: string
    url: string
  }
  version?: number
}

export type RichTextContent = {
  root: {
    children: RichTextNode[]
  }
}

export type ContentSection = {
  blockName?: string
  category?: string
  content?: RichTextContent | string
  featuredImage?: {
    url?: string
  }
  id?: string
  readTime?: string
  title: string
}

export type HowItWorksProps = {
  blockName?: string
  ctaText: string
  id?: string
  image?: Media
  layoutType: string
  steps: HowItWorksStep[]
  title: string
}
