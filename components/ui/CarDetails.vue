<script setup lang="ts">
import { useFavoriteCarsStore } from "~/store/cars";
import { storeToRefs } from "pinia";

const store = useFavoriteCarsStore();
const { isCarMarkedAsFavorite } = storeToRefs(store);
</script>

<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-6 max-lg:w-full max-lg:mx-auto">
      <div class="flex flex-col w-full lg:w-1/3">
        <div
          class="relative flex-1 bg-blue-600 drop-shadow flex flex-col p-6 rounded-xl lg:max-w-[492px] w-full"
        >
          <div class="flex flex-col">
            <h1
              class="capitalize text-white font-primary lg:text-3xl text-base font-semibold lg:max-w-[372px] max-w-[260px]"
            >
              Sports car with the best design and acceleration
            </h1>
            <p
              class="text-white font-primary lg:text-sm text-sm mt-4 mb-5 lg:max-w-[284px] max-w-[240px]"
            >
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
          </div>
          <div
            class="w-full flex flex-row justify-center max-h-[250px] max-md:max-h-[180px]"
          >
            <img :src="car?.img" class="object-contain z-10" />
          </div>
          <img
            class="absolute inset-0 w-full h-full object-cover -z-1"
            src="/images/patternedBackground.svg"
            alt="Patterned Background"
          />
        </div>
        <div
          class="flex flex-row justify-between h-[64px] sm:h-[124px] gap-6 mt-6"
        >
          <div
            class="relative flex-1 bg-blue-600 flex justify-center rounded-lg cursor-pointer"
          >
            <img
              :src="car?.img"
              class="h-full w-full p-2 object-contain rounded-lg cursor-pointer"
            />
            <img
              class="absolute inset-0 w-full h-full object-cover -z-1"
              src="/images/patternedBackground.svg"
              alt="Patterned Background"
            />
          </div>
          <div class="flex-1">
            <img
              :src="car?.images[0]?.url"
              alt="url1"
              class="h-full w-full object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div class="flex-1">
            <img
              :src="car?.images[1]?.url"
              alt="url2"
              class="h-full w-full object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-white drop-shadow lg:rounded rounded-xl flex flex-col p-6 max-lg:mt-8 flex-1 justify-between text-gray-700"
      >
        <div>
          <div class="flex flex-row justify-between">
            <div class="flex flex-col">
              <h1 class="lg:text-2xl text-xl font-bold">{{ car?.name }}</h1>
              <div class="flex flex-row items-center">
                <div class="flex items-center justify-between">
                  <div class="relative mr-28">
                    <NuxtRating
                      :rating-size="'22px'"
                      :read-only="true"
                      :ratingValue="3.5"
                    />
                  </div>

                  <p
                    class="lg:text-hint-400 text-hint-300 lg:text-sm text-xs font-medium"
                  >
                    440+ Reviewer
                  </p>
                </div>
              </div>
            </div>
            <div class="items-top ml-2">
              <ClientOnly>
                <Heart
                  :class="
                    cn('cursor-pointer fill-none mt-1', {
                      'fill-red-500 stroke-red-500': isCarMarkedAsFavorite(
                        car?.id
                      ),
                    })
                  "
                  @click.prevent="
                    store.toggleFavorite({
                      id: car.id,
                      name: car.name,
                      type: car.type,
                      gasolineLiter: car.gasolineLiter,
                      kindOfTransition: car.kindOfTransition,
                      people: car.people,
                      pricePerDay: car.pricePerDay,
                      img: car.img,
                    })
                  "
                />
              </ClientOnly>
            </div>
          </div>
          <p
            class="font-primary lg:text-xl text-md lg:text-hint-400 text-hint-300 tracking-tight my-8 lg:leading-10"
          >
            {{ car?.description }}
          </p>
          <div
            class="max-w-[740px] gap-x-11 gap-y-6 flex flex-wrap lg:text-xl text-md font-primary"
          >
            <div
              class="flex gap-x-4 min-w-[170px]"
              v-for="element in [
                { title: 'Type Car', value: car.type },
                {
                  title: 'Capacity',
                  value: car.people + ' Person',
                },
                {
                  title: 'Gasoline',
                  value: car.gasolineLiter,
                },
                {
                  title: 'Transmission',
                  value: car.kindOfTransition,
                },
              ]"
            >
              <div class="font-primary text-hint-300">
                {{ element.title }}
              </div>
              <div class="font-bold">
                {{ element.value }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row justify-self-end w-full justify-between items-center mt-8 lg:mt-16"
        >
          <p class="text-seconday-500 font-primary font-bold lg:text-2xl">
            ${{ car?.pricePerDay?.toFixed(2) }}/
            <span class="text-hint-300 text-sm">day</span>
          </p>
          <button
            class="bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-[10px] cursor-pointer px-4 py-3 font-semibold capitalize"
          >
            rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
});
</script>
