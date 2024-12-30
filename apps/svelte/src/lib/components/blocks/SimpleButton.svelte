<script lang="ts">
  import type { SimpleButtonProps } from './types'
  import { Button } from '$lib/components/ui/button'
  
  export let block: SimpleButtonProps
</script>

<a href={block.link}>
  <Button variant={block.style}>
    {block.text}
  </Button>
</a>
