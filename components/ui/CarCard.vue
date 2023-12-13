<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useFavoriteCarsStore } from "~/store/cars";
import type { Car } from "~/types";

const store = useFavoriteCarsStore();
const { isCarMarkedAsFavorite } = storeToRefs(store);

const props = defineProps({
  data: {
    type: Object as PropType<Car>,
    required: true,
  },
  variant: {
    type: String as PropType<"stacked" | "default">,
    required: false,
    default: "default",
  },
});

const {
  data: {
    name,
    type,
    gasolineLiter,
    kindOfTransition,
    people,
    pricePerDay,
    img,
    id,
  },
} = props;
</script>

<template>
  <div
    class="w-full h-full bg-white rounded-[10px] drop-shadow flex flex-col min-h-[300px] p-4 lg:max-2xl:w-[304px] lg:max-2xl:p-6 lg:max-2xl:h-[360px]"
  >
    <div class="w-full flex justify-between">
      <h3
        class="font-primary text-gray-700 text-left font-bold text-base lg:text-lg"
      >
        {{ name }}
      </h3>
      <ClientOnly>
        <div>
          <Heart
            @click.prevent="
              store.toggleFavorite({
                id,
                name,
                type,
                gasolineLiter,
                kindOfTransition,
                people,
                pricePerDay,
                img,
              })
            "
            :class="
              cn(
                'cursor-pointer fill-none hover:fill-red-500/75 active:stroke-red-500/75',
                {
                  'fill-red-500 stroke-red-500': isCarMarkedAsFavorite(id),
                }
              )
            "
          />
        </div>
      </ClientOnly>
    </div>
    <h6
      class="font-primary text-xs lg:text-sm text-hint-300 font-medium text-left"
    >
      {{ type }}
    </h6>
    <div
      :class="
        cn('flex flex-1 justify-between lg:flex-col ', {
          'flex-col': variant === 'stacked',
        })
      "
    >
      <div class="flex-1 flex items-center justify-center relative max-lg:mr-4">
        <img :src="img" :alt="name" />
        <div
          class="absolute bg-gradient-to-b from-white/0 to-white w-full h-3/4 bottom-0"
        ></div>
      </div>
      <div
        :class="
          cn('flex justify-between max-h-[74px] gap-y-4 flex-col lg:flex-row', {
            'flex-row': variant === 'stacked',
          })
        "
      >
        <div class="flex items-center">
          <Gasoline class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]" />
          <p
            class="font-primary font-medium text-hint-300 ml-1 md:ml-1.5 md:text-sm text-xs lg:text-base"
          >
            {{ gasolineLiter }}
          </p>
        </div>
        <div class="flex items-center">
          <TransitionType class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]" />
          <p
            class="font-primary font-medium text-hint-300 ml-1 md:ml-1.5 md:text-sm text-xs lg:text-base"
          >
            {{ kindOfTransition }}
          </p>
        </div>
        <div class="flex items-center">
          <People class="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]" />
          <p
            class="font-primary font-medium text-hint-300 ml-1 md:ml-1.5 md:text-sm text-xs lg:text-base"
          >
            {{ people }} People
          </p>
        </div>
      </div>
    </div>
    <div
      :class="
        cn('flex justify-between items-center py-2 lg:py-3', {
          'py-2': variant === 'stacked',
        })
      "
    >
      <p
        class="text-seconday-500 font-primary font-bold lg:text-lg xl:text-xl text-base"
      >
        ${{ pricePerDay?.toFixed(2) }}/
        <span class="text-hint-300 ml-1 xl:text-sm text-xs">day</span>
      </p>
      <NuxtLink
        :to="`/cars/${id}`"
        class="bg-blue-600 hover:bg-blue-500 text-white text-sm max-sm:text-xs px-3 py-2 rounded-md cursor-pointer font-semibold capitalize"
      >
        Rent Now
      </NuxtLink>
    </div>
  </div>
</template>
