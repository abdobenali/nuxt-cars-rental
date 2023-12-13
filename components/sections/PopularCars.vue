<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-hint-300 font-primary font-semibold">Popular Car</h3>
      <h5
        class="text-blue-500 hover:text-blue-600 font-primary font-semibold cursor-pointer"
      >
        View All
      </h5>
    </div>
    <div class="py-2">
      <div class="flex gap-x-8 overflow-x-auto no-scrollbar">
        <div v-for="car in popularCars" :key="car?.id">
          <div class="max-w-[350px] min-w-[270px]">
            <CarCard :data="car" variant="stacked" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: popularCars } = useFetch("/proxy/cars/popular", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
