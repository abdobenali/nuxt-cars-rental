<template>
  <div
    class="max-w-[1500px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <ClientOnly>
      <FavoriteCars :cars="getFavoriteCars" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteCarsStore } from "~/store/cars";
import { storeToRefs } from "pinia";

const store = useFavoriteCarsStore();
const { getFavoriteCars } = storeToRefs(store);
</script>
