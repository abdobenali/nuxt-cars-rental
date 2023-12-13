<script setup>
const route = useRoute();
const { query } = route.params;
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
