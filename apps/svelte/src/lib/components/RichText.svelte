<script lang="ts">
  import SimpleButton from '$lib/components/blocks/SimpleButton.svelte';
  import SimpleImage from '$lib/components/blocks/SimpleImage.svelte';
  import VideoEmbed from '$lib/components/blocks/VideoEmbed.svelte';
  import type { RichTextNode, SimpleImageProps, VideoEmbedProps } from '$lib/components/blocks/types';

  export let nodes: RichTextNode[];
  export let serverURL: string = '';

  function getFullUrl(url: string) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${serverURL}${url}`;
  }

  // Map block types to components
  const blockComponents = {
    simpleButton: SimpleButton,
    simpleImage: SimpleImage,
    videoEmbed: VideoEmbed,
  } as const;

  function isSimpleImage(block: any): block is SimpleImageProps {
    return block && block.image && block.altText;
  }

  type BlockComponent = {
    simpleImage: typeof SimpleImage;
  };

  type BlockResult = 
    | { type: 'simpleImage'; data: SimpleImageProps };

  function getBlockData(node: RichTextNode): BlockResult | null {
    if (!node.blockType) return null;
    
    if (node.blockType === 'simpleImage' && node.fields) {
      const imageData = {
        image: {
          url: node.fields.image?.url || '',
          alt: node.fields.image?.alt || ''
        },
        altText: node.fields.altText || ''
      };
      
      if (isSimpleImage(imageData)) {
        return { type: 'simpleImage', data: imageData };
      }
    }
    
    return null;
  }

  function renderTextContent(node: RichTextNode): string {
    switch (node.type) {
      case 'paragraph':
        return `
          <p class="mb-6">
            ${node.children?.map(renderTextContent).join('') || ''}
          </p>
        `;
      case 'heading':
        return `
          <${node.tag} class="mt-${node.tag === 'h1' ? '16' : node.tag === 'h2' ? '16' : node.tag === 'h3' ? '12' : node.tag === 'h4' ? '10' : node.tag === 'h5' ? '8' : '8'} ${node.tag === 'h1' ? 'text-4xl sm:text-5xl' : node.tag === 'h2' ? 'text-2xl' : node.tag === 'h3' ? 'text-2xl' : node.tag === 'h4' ? 'text-xl' : node.tag === 'h5' ? 'text-lg' : 'text-base'} font-bold tracking-tight text-gray-900 mb-${node.tag === 'h1' ? '8' : node.tag === 'h2' ? '6' : node.tag === 'h3' ? '6' : node.tag === 'h4' ? '4' : node.tag === 'h5' ? '4' : '4'}">
            ${node.children?.map(renderTextContent).join('') || ''}
          </${node.tag}>
        `;
      case 'list':
        if (node.listType === 'bullet') {
          return `
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              ${node.children?.map(child => `
                <li class="flex gap-x-3">
                  <svg class="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span>
                    ${child.children?.map(renderTextContent).join('') || ''}
                  </span>
                </li>
              `).join('') || ''}
            </ul>
          `;
        } else {
          return `
            <ol class="mt-8 space-y-8 text-gray-600 list-decimal">
              ${node.children?.map(child => `
                <li class="flex gap-x-3">
                  <span>
                    ${child.children?.map(renderTextContent).join('') || ''}
                  </span>
                </li>
              `).join('') || ''}
            </ol>
          `;
        }
      case 'text':
        if (node.format === 1) {
          return `<strong class="font-semibold text-gray-900">${node.text}</strong>`;
        } else if (node.format === 2) {
          return `<em class="italic">${node.text}</em>`;
        } else if (node.format === 3) {
          return `<strong class="font-semibold text-gray-900"><em class="italic">${node.text}</em></strong>`;
        }
        return `<span>${node.text}</span>`;
      case 'upload':
        if (node.relationTo === 'media' && node.value) {
          return `
            <img
              src="${getFullUrl(node.value.url)}"
              alt="${node.value.alt}"
              class="w-full rounded-lg object-cover my-6"
            />
          `;
        }
        return '';
      default:
        return '';
    }
  }
</script>

<div class="richtext-content">
  {#each nodes as node}
    {#if node.type === 'block'}
      {#if node.fields?.blockType === 'simpleImage'}
        {@debug node}
        <SimpleImage
          image={{
            url: getFullUrl(node.fields?.image?.url || node.value?.url || ''),
            alt: node.fields?.image?.alt || node.value?.alt || ''
          }}
          altText={node.fields?.altText || node.value?.alt || ''}
        />
      {:else if node.fields?.blockType === 'simpleButton'}
        <SimpleButton
          block={{
            link: node.fields?.link || '',
            style: node.fields?.style || 'default',
            text: node.fields?.text || ''
          }}
        />
      {:else if node.fields?.blockType === 'videoEmbed'}
        <VideoEmbed block={{
          videoType: node.fields.videoType || 'youtube',
          videoId: node.fields.videoId,
          videoFile: node.fields.videoFile
        }} />
      {:else}
        {@html renderTextContent(node)}
      {/if}
    {:else}
      {@html renderTextContent(node)}
    {/if}
  {/each}
</div>
