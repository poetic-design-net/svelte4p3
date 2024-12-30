<script lang="ts">
  import type { VideoEmbedProps } from './types'
  
  export let block: VideoEmbedProps
</script>

<div class="video-embed my-8 rounded-lg">
  {#if block.videoType === 'youtube'}
    <iframe
      src={`https://www.youtube.com/embed/${block.videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  {:else if block.videoType === 'vimeo'}
    <iframe
      src={`https://player.vimeo.com/video/${block.videoId}`}
      title="Vimeo video player"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  {:else if block.videoType === 'upload' && block.videoFile}
    <video controls>
      <source src={block.videoFile.url} type={block.videoFile.mimeType} />
      Your browser does not support the video tag.
    </video>
  {/if}
</div>

<style>
  .video-embed {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .video-embed iframe,
  .video-embed video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
