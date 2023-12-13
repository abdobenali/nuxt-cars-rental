import { defineStore } from "pinia";
import type { Car } from "~/types";

export const useFavoriteCarsStore = defineStore("Cars", {
  state: () => {
    return {
      favoriteCars: [] as Car[],
    };
  },
  actions: {
    toggleFavorite(car: Car) {
      const index = this.favoriteCars.findIndex(c => c?.id === car?.id);
      if (index > -1) {
        this.favoriteCars = this.favoriteCars.filter((c, idx) => idx !== index);
      } else {
        this.favoriteCars.push(car);
      }
    },
  },
  getters: {
    getFavoriteCars: state => state.favoriteCars,
    isCarMarkedAsFavorite: state => (id: String) => {
      return state.favoriteCars.find(item => item?.id === id);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
