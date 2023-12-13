<script setup>
const route = useRoute();
const { query } = route.params;

useSeoMeta({
  title: "Nuxt Cars Rental",
  ogTitle: "Nuxt Cars Rental",
  description:
    "Car rental services that provides cheap car rental services and safe and comfortable facilities.",
  ogDescription:
    "Car rental services that provides cheap car rental services and safe and comfortable facilities.",
  image: "/ogImage.svg",
  ogImage: "/ogImage.svg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header :initialSearchQuery="query" />
    <div class="bg-gray-50 flex-1 w-full max-lg:px-6">
      <slot />
    </div>
    <Footer />
  </div>
</template>
