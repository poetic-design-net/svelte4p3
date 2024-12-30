<script lang="ts">
  import type { Media } from '../blocks/types'
  
  interface Props {
    image: Media
    altText: string
  }
  
  export let image: Props['image']
  export let altText: Props['altText']
  </script>
  
  <div class="my-8">
    <img 
      src={image.url} 
      alt={altText}
      class="w-full h-auto rounded-lg"
    />
  </div>
  