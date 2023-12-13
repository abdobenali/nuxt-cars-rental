<template>
  <div class="flex flex-row w-full md:gap-8 max-md:justify-center">
    <div
      class="relative md:flex-1 bg-blue-500 md:flex flex-col p-6 rounded-xl overflow-hidden w-full"
    >
      <div class="flex flex-col max-w-[272px] z-20">
        <h1
          class="capitalize text-white font-primary text-3xl font-semibold z-20"
        >
          The best Platform for car rental
        </h1>
        <p class="text-white font-primary text-sm mt-4 mb-5 z-20">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-primary rounded w-28 py-3 z-20 cursor-pointer"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full flex flex-row justify-center h-[106px]">
        <img
          src="/images/adsCar2.png"
          alt="nissan gtr car"
          class="object-contain z-10"
        />
      </div>
      <div class="absolute inset-0 h-full w-full z-0 top-28 -left-24">
        <img
          src="/images/concentricEllipsesShadow.svg"
          alt="Concentric Ellipses Shadow"
          class="w-full h-full scale-[2.25] opacity-25 z-0"
        />
      </div>
    </div>
    <div
      class="relative flex-1 bg-blue-600 md:flex hidden flex-col p-6 rounded-xl overflow-hidden"
    >
      <div class="flex flex-col max-w-[300px] z-20w">
        <h1 class="capitalize text-white font-primary text-3xl font-semibold">
          Easy way to rent a car at a low price
        </h1>
        <p class="text-white font-primary text-sm mt-4 mb-5">
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-400 text-white z-20 font-primary rounded w-28 h-11 cursor-pointer"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full flex flex-row justify-center h-[100px]">
        <img
          class="object-contain z-10"
          src="/images/adsCar1.png"
          alt="Sport White Car"
        />
      </div>
      <div class="absolute inset-0 w-full h-full">
        <img
          class="object-cover w-full h-full lg:h-fit -z-1"
          src="/images/patternedBackground.svg"
          alt="Patterned Background"
        />
      </div>
    </div>
  </div>
</template>
