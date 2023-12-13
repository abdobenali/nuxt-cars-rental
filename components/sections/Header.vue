<script setup lang="ts">
const props = defineProps({
  initialSearchQuery: {
    type: String,
    required: false,
    default: "",
  },
});

// used to get query from url params and set it to searchQuery
const searchQuery = ref(props?.initialSearchQuery);
</script>

<template>
  <header
    class="bg-gray-50 lg:bg-white w-full lg:h-[124px] lg:border lg:border-b lg:border-hint-400/40"
  >
    <div
      class="w-[95vw] lg:w-[90vw] lg:px-6 px-3 h-full mx-auto flex items-center flex-wrap max-lg:justify-between max-lg:pt-10 pb-[10px]"
    >
      <Brand class="mr-5" />
      <div
        class="flex w-full lg:flex-1 bg-white max-lg:mt-4 lg:ml-16 lg:mr-8 py-3 lg:py-2.5 px-6 lg:px-5 rounded-[10px] lg:rounded-full border border-primaryBorder/40 order-3 lg:order-2"
      >
        <NuxtLink>
          <Search
            class="mr-2 lg:mr-5 cursor-pointer"
            @click="
              if (searchQuery) $router.push(`/cars/query/${searchQuery}`);
              else $router.push(`/`);
            "
          />
        </NuxtLink>
        <input
          class="flex-1 outline-none text-hint-400 text-sm font-medium font-primary"
          placeholder="Search something here..."
          v-model.trim="searchQuery"
          @keyup.enter="
            if (searchQuery) $router.push(`/cars/query/${searchQuery}`);
            else $router.push(`/`);
          "
        />
      </div>

      <NuxtLink
        class="rounded-full border border-primaryBorder/40 p-2.5 order-2 lg:order-3 cursor-pointer"
        to="/favorites"
      >
        <Heart class="fill-hint-400 hover:fill-hint-400/75" />
      </NuxtLink>
    </div>
  </header>
</template>
