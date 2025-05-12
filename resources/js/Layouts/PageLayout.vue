<template>
    <v-app>
        <Head :title="title" />
        <!-- Drawer -->
        <Drawer />

        <!-- Header -->
        <Header />

        <!-- Page Content -->
        <v-main class="mt-lg-4">
            <slot />
        </v-main>

        <!-- Footer -->
        <Footer />

        <!-- Botón para volver arriba -->
        <v-btn
            icon="mdi-arrow-up"
            v-show="showScrollTopButton"
            @click="scrollToTop"
            class="scroll-to-top"
            color="primary"
        >
            <v-icon></v-icon>
        </v-btn>
    </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { defineProps } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";

import Drawer from "../Base/Drawer.vue"; // Ruta corregida
import Header from "../Base/Header.vue"; // Ruta corregida
import Footer from "../Base/Footer.vue"; // Ruta corregida

defineProps({
    title: {
        type: String,
        required: true,
    },
});

const showScrollTopButton = ref(false);

const handleScroll = () => {
    showScrollTopButton.value = window.scrollY > window.innerHeight;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Estilo del botón para volver arriba */
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
