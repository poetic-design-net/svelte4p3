<script lang="ts">
  import RichText from '$lib/components/RichText.svelte'
  import type { Article } from './types'

  export let data: Article & { serverURL: string }
</script>

<article class="relative bg-white">
  <!-- Mobile layout -->
  <div class="flex lg:hidden">
    <div class="container mx-auto px-6 py-24 flex flex-col">
      {#if data.featuredImage}
        <div class="mb-8">
          <img 
            src={`${data.serverURL}${data.featuredImage.url}`} 
            alt={data.title}
            class="w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-cover h-[50vh]"
          />
        </div>
      {/if}
      <div class="prose prose-lg">
        <p class="text-base/7 font-semibold text-indigo-600">{data.category}</p>
        <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{data.title}</h1>
        <p class="mt-2 text-gray-600">{data.readTime} min read</p>

        <div class="mt-10 prose prose-lg text-base/7 text-gray-700">
          {#if data.content}
            {@const nodes = typeof data.content === 'string' ? JSON.parse(data.content).root.children : data.content.root.children}
            {@const debugContent = data.content}
            {@debug debugContent, nodes}
            <RichText {nodes} serverURL={data.serverURL} />
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Desktop layout -->
  <div class="hidden lg:flex w-full">
    <div class="container mx-auto px-6 py-24 flex">
      <div class="flex w-full gap-x-8">
        <div class="w-1/2 pr-8">
        <p class="text-base/7 font-semibold text-indigo-600">{data.category}</p>
        <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{data.title}</h1>
        <p class="mt-2 text-gray-600">{data.readTime} min read</p>

        <div class="mt-10 prose prose-lg text-base/7 text-gray-700">
          {#if data.content}
            {@const nodes = typeof data.content === 'string' ? JSON.parse(data.content).root.children : data.content.root.children}
            {@const debugContent = data.content}
            {@debug debugContent, nodes}
            <RichText {nodes} serverURL={data.serverURL} />
          {/if}
        </div>
      </div>

        {#if data.featuredImage}
          <div class="w-1/2">
            <div class="sticky top-24">
              <img 
                src={`${data.serverURL}${data.featuredImage.url}`} 
                alt={data.title}
                class="w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-cover max-h-[calc(100vh-12rem)]"
              />
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</article>
