<template>
  <div
    class="max-w-[1500px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8"
  >
    <CarDetails :car="carDetails" />
    <RecommendationCars :showMoreButtonHidden="true" />
  </div>
</template>

<script setup>
const route = useRoute();
let { id } = route.params;

const carDetails = ref(null);

const res = await useFetch(`/proxy/cars/${id}`);

carDetails.value = res?.data?._rawValue;

useSeoMeta({
  title: `${carDetails.value.name}`,
  ogTitle: `${carDetails.value.name}`,
  description: `${carDetails.value.description}`,
  ogDescription: `${carDetails.value.description}`,
  image: `${carDetails.value.img}`,
  ogImage: `${carDetails.value.img}`,
  twitterCard: "summary_large_image",
});
</script>
