<script lang="ts">
  export let block: {
    title: string;
    description: string;
    articles: {
      id: string;
      title: string;
      category: string;
      readTime: string;
      featuredImage: {
        url: string;
      };
      slug: string;
    }[];
  };
</script>

<section class="pt-20 pb-36 bg-black overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="md:max-w-lg mx-auto text-center mb-20">
      <h2 class="mb-4 font-heading font-semibold text-white text-6xl sm:text-7xl">
        {block.title}
      </h2>
      <p class="text-lg text-gray-400">{block.description}</p>
    </div>
    <div class="flex flex-wrap -m-3">
      {#each block.articles as article}
        <div class="w-full md:w-1/2 xl:w-1/4 p-3">
          <a class="group" href="/articles/{article.slug}">
            <div class="group flex flex-col aspect-[2/3] justify-end h-full relative overflow-hidden rounded-lg">
              <img 
                class="mx-auto h-full w-full transform group-hover:scale-110 transition ease-out duration-500" 
                src={article.featuredImage.url} 
                alt={article.title}
              >
              <div class="absolute bottom-0 left-0 w-full p-2.5">
                <div class="p-5 w-full bg-black bg-opacity-80 rounded-md">
                  <h2 class="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
                    {article.category} . {article.readTime}
                  </h2>
                  <p class="font-heading font-semibold text-lg text-white group-hover:underline">
                    {article.title}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
