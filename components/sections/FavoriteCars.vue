<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-hint-300 font-primary font-semibold">Favorite Cars</h3>
    </div>
    <div
      v-if="cars.length > 0"
      class="flex flex-col gap-[56px] items-center justify-center"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <div
          class="flex items-center justify-center"
          v-for="car in cars"
          :key="car.id"
        >
          <CarCard :data="car" />
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl font-primary w-full text-center text-primary-400">
        No Favorite Found
      </h1>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "FavoriteCars",
  props: {
    cars: {
      type: Array,
      required: true,
    },
  },
});
</script>
