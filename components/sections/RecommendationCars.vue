<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-5">
      <h3 class="text-hint-300 font-primary font-semibold">
        Recomendation Car
      </h3>
    </div>
    <div class="flex flex-col gap-[56px] items-center justify-center">
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <div
          class="flex items-center justify-center"
          v-for="car in recomandedCars"
          :key="car?.id"
        >
          <CarCard :data="car" />
        </div>
      </div>
      <button
        class="w-fit px-5 text-white font-primary font-semibold h-[44px] rounded-[4px] bg-blue-600 hover:bg-blue-500 cursor-pointer"
        v-if="page < lastPage && !showMoreButtonHidden"
        @click="handleShowMore"
      >
        <span v-if="isPending"> loading... </span>
        <span v-else> Show more cars </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const page = ref(1);
const lastPage = ref(1);
const isPending = ref(false);
const recomandedCars = ref([]);

onMounted(() => {
  loadRecommendedCars();
});

const handleShowMore = () => {
  if (page.value <= lastPage.value) {
    page.value = page.value + 1;
    loadRecommendedCars();
  }
};

const loadRecommendedCars = async () => {
  isPending.value = true;
  const res = await $fetch(`/proxy/cars`, {
    method: "GET",
    params: {
      page: page?.value,
    },
  });

  res?.data?.forEach(car => {
    recomandedCars.value.push(car);
  });

  isPending.value = false;
  lastPage.value = res?.meta?.last_page;
};
</script>
<script>
export default defineComponent({
  name: "RecommendationCars",
  props: {
    showMoreButtonHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
