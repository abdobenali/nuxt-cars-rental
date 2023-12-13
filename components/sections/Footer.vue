<template>
  <footer>
    <div class="bg-white w-full flex justify-center box-border">
      <div class="w-[95vw] lg:w-[90vw] max-w-full">
        <div
          class="flex flex-col lg:flex-row gap-8 justify-between py-5 px-3 lg:py-20 lg:px-6"
        >
          <div class="flex flex-col flex-1 gap-4">
            <div>
              <Brand />
            </div>
            <p
              class="font-primary text-hint-300 text-sm md:text-base font-medium lg:max-w-[290px]"
            >
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div
            class="flex flex-wrap max-md:w-full max-md:gap-y-12 max-md:gap-x-16 gap-x-12 sm:max-lg:justify-between"
          >
            <div class="flex flex-col gap-4 w-[150px]">
              <p class="font-primary text-gray-700 text-xl font-semibold">
                About
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  class="text-hint-300 font-primary font-medium"
                  v-for="section in aboutSection"
                  :key="section?.title"
                  :to="section?.link"
                >
                  {{ section?.title }}
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-4 md:order-3 w-[150px]">
              <p class="font-primary text-gray-700 text-xl font-semibold">
                Socials
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  class="text-hint-300 font-primary font-medium"
                  v-for="section in socialsSection"
                  :key="section?.title"
                  :to="section?.link"
                >
                  {{ section?.title }}
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-4 md:order-2 w-[150px]">
              <p class="font-primary text-gray-700 text-xl font-semibold">
                Community
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  class="text-hint-300 font-primary font-medium"
                  v-for="section in communitySection"
                  :key="section?.title"
                  :to="section?.link"
                >
                  {{ section?.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:flex bg-gray-300 h-px w-full"></div>
        <div
          class="flex flex-col gap-y-8 md:flex-row px-3 lg:px-6 my-5 md:my-8"
        >
          <p
            class="order-2 md:order-1 flex-1 text-gray-700 text-xs md:text-base font-primary font-semibold"
          >
            ©2022 DM. All rights reserved
          </p>
          <div
            class="order-1 md:order-2 md:gap-[60px] flex justify-between box-border"
          >
            <NuxtLink
              class="text-gray-700 text-xs md:text-base font-primary font-semibold"
              to="/"
            >
              Privacy & Policy
            </NuxtLink>
            <NuxtLink
              class="text-gray-700 text-xs md:text-base font-primary font-semibold"
              to="/"
              >Terms & Condition
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const footerConfig = {
  about: [
    {
      title: "How it works",
      link: "/",
    },
    {
      title: "Featured",
      link: "/",
    },
    {
      title: "Partnership",
      link: "/",
    },
    {
      title: "Bussiness Relation",
      link: "/",
    },
  ],
  community: [
    {
      title: "Events",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Podcast",
      link: "/",
    },
    {
      title: "Invite a friend",
      link: "/",
    },
  ],
  socials: [
    {
      title: "Discord",
      link: "/",
    },
    {
      title: "Instagram",
      link: "/",
    },
    {
      title: "Twitter",
      link: "/",
    },
    {
      title: "Facebook",
      link: "/",
    },
  ],
};

export default defineComponent({
  name: "Footer",
  data() {
    const { about, community, socials } = footerConfig;

    return {
      aboutSection: about,
      communitySection: community,
      socialsSection: socials,
    };
  },
});
</script>
