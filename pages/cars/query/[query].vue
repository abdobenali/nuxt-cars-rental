<template>
  <div
    class="max-w-[1500px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <div class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <span
          v-if="isPending"
          class="text-gray-500 font-primary font-medium text-lg"
        >
          Loading...
        </span>
        <h3 v-else class="text-gray-500 font-primary font-medium text-lg">
          {{ foundCarsByQuery.length }} results found about
          <span class="font-bold"> '{{ query }}'</span>
        </h3>
      </div>
      <div
        v-if="foundCarsByQuery.length > 0"
        class="flex flex-col gap-[56px] items-center justify-center"
      >
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
        >
          <div
            class="flex items-center justify-center"
            v-for="car in foundCarsByQuery"
            :key="car.id"
          >
            <CarCard :data="car" />
          </div>
        </div>
        <button
          v-if="page < lastPage"
          @click="handleShowMore"
          class="w-fit px-5 text-white font-primary font-semibold h-[44px] rounded-[4px] bg-blue-600 hover:bg-blue-500 cursor-pointer"
        >
          <span v-if="isPending">Loading... </span>
          <span v-else> Show more cars </span>
        </button>
      </div>
      <div v-else>
        <h1
          v-if="!isPending"
          class="text-2xl font-primary w-full text-center text-primary-400"
        >
          No Results Found
        </h1>
        <div v-else class="flex justify-center">loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const page = ref(1);
const lastPage = ref(1);
const isPending = ref(false);
const foundCarsByQuery = ref([]);

const { query } = route.params;

onMounted(() => {
  if (query) loadFoundCarsByQuery();
});

const handleShowMore = () => {
  if (page.value <= lastPage.value) {
    page.value = page.value + 1;
    loadFoundCarsByQuery();
  }
};

const loadFoundCarsByQuery = async () => {
  if (query) {
    isPending.value = true;

    const res = await $fetch("/proxy/cars", {
      method: "GET",
      params: {
        q: query,
        page: page?.value,
      },
    });

    res?.data?.forEach(car => {
      foundCarsByQuery.value.push(car);
    });

    isPending.value = false;
    lastPage.value = res?.meta?.last_page;
  }
};

useHead({
  title: `Search '${query}'`,
  ogTitle: `Search '${query}'`,
});
</script>
