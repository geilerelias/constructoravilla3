import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", {
    state: () => ({
        isDrawerOpen: false,
    }),
    actions: {
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        },
        change(value) {
            this.drawer = value
        },
    },
});
