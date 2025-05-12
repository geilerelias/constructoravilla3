<template>
    <v-app-bar
        density="compact"
        :elevation="0"
        height="50"
        color="primary"
        scroll-behavior="hide"
    >
        <v-container class="container">
            <v-row
                class="d-flex"
                :class="
                    xs
                        ? 'flex-column align-center py-0'
                        : 'justify-space-between align-center'
                "
            >
                <!-- Menú de navegación -->
                <v-col
                    v-if="!xs"
                    cols="auto"
                    class="text-center"
                    :class="smAndDown ? 'py-0' : ''"
                >
                    <Link
                        v-for="item in filteredRoutes"
                        :key="item.name"
                        class="text-decoration-none text-white text-capitalize justify-center"
                        :href="route(item.path)"
                    >
                        <v-btn
                            size="small"
                            variant="text"
                            class="mx-1 text-capitalize px-1"
                        >
                            {{ item.name }}
                        </v-btn>
                    </Link>
                </v-col>
                <!-- Redes sociales para pantallas grandes -->
                <v-col
                    cols="auto"
                    class="text-right"
                    :class="xs ? 'text-center' : ''"
                >
                    <v-icon
                        icon="mdi-facebook"
                        size="x-small"
                        class="ml-4"
                        @click="openLink('https://facebook.com')"
                    ></v-icon>
                    <v-icon
                        icon="mdi-twitter"
                        size="x-small"
                        class="ml-4"
                        @click="openLink('https://twitter.com')"
                    ></v-icon>
                    <v-icon
                        icon="mdi-instagram"
                        size="x-small"
                        class="ml-4"
                        @click="openLink('https://instagram.com')"
                    ></v-icon>
                    <v-icon
                        icon="mdi-linkedin"
                        size="x-small"
                        class="ml-4"
                        @click="openLink('https://linkedin.com')"
                    ></v-icon>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>

    <v-app-bar
        class="d-flex justify-center align-center"
        :class="lgAndUp ? 'py-2' : ''"
        app
        elevated="12"
        :density="lgAndUp || smAndDown ? 'default' : 'prominent'"
        scroll-behavior="elevate"
        color="white"
    >
        <v-container class="">
            <v-row
                class="d-flex justify-space-between align-center justify-center"
            >
                <v-col
                    :order="mdAndDown ? 1 : 1"
                    cols="auto"
                    class="d-flex align-center text-left"
                >
                    <img
                        v-if="lgAndUp"
                        :src="imgLogoOriginal"
                        alt="Logo"
                        class="img-logo"
                    />
                    <img
                        v-else
                        :src="imgLogoOriginal"
                        alt="Logo"
                        class="img-logo"
                    />
                </v-col>
                <!-- Navegación con transición -->
                <transition name="fade">
                    <!-- v-if="(mdAndUp && showNav) || lgAndUp" -->
                    <v-col
                        :order="mdAndDown ? 3 : 2"
                        v-if="mdAndUp"
                        :class="
                            md
                                ? 'd-flex justify-center align-center align-content-center justify-content-around align-content-space-around mx-auto'
                                : 'd-flex justify-center align-center w-full min-w-full justify-space-between mx-0'
                        "
                        :cols="mdAndDown ? '12' : 'auto'"
                        rounded="0"
                        class="rounded-0"
                    >
                        <Link
                            v-for="item in routesStore.routes"
                            :key="item.name"
                            :href="route(item.path)"
                            class="text-decoration-none d-md-flex d-none py-0 menu text-capitalize justify-center"
                        >
                            <v-btn
                                :stacked="!md"
                                variant="text"
                                class="text-capitalize text-subtitle-1 hover-effect"
                                :color="
                                    isActive(item) ? 'primary' : 'secondary'
                                "
                            >
                                {{ item.name }}
                            </v-btn>
                        </Link>
                    </v-col>
                </transition>

                <v-col
                    :order="mdAndDown ? 2 : 3"
                    cols="auto"
                    class="d-flex align-center text-right"
                >
                    <v-btn
                        v-if="!smAndDown"
                        color="primary"
                        variant="elevated"
                        class="text-capitalize"
                    >
                        Cotizar
                    </v-btn>

                    <v-app-bar-nav-icon
                        color="primary"
                        density="comfortable"
                        variant="elevated"
                        class="ml-4 pa-0 rounded-sm"
                        size="default"
                        icon-size="40px"
                        icon="mdi-menu"
                        v-if="smAndDown"
                        @click="toggleDrawer"
                    >
                        <template v-slot:icon>
                            <v-icon icon="mdi-home"></v-icon>
                        </template>
                    </v-app-bar-nav-icon>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Link, router } from "@inertiajs/vue3"; // Usar el router de Inertia
import imgLogo from "@images/logo/logo.png"; // Usar notación @
import imgLogoOriginal from "@images/logo/logo-original-2.png"; // Usar notación @
import { useDisplay } from "vuetify";
import { useRoutesStore } from "@/../stores/routesStore"; // Usar notación @
import { useDrawerStore } from "@/../stores/drawerStore"; // Usar notación @

const routesStore = useRoutesStore();
const drawerStore = useDrawerStore();

const {
    mobile,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    smAndUp,
    mdAndUp,
    lgAndUp,
    xlAndUp,
    smAndDown,
    mdAndDown,
    lgAndDown,
    xlAndDown,
} = useDisplay();

const filteredRoutes = computed(() => {
    const routes = routesStore.routes;
    return [routes[0], routes[1], routes[routes.length - 1]];
});

const navigateTo = (path) => {
    router.visit(path); // Usar router de Inertia para navegar
};

const openLink = (url) => {
    window.open(url, "_blank");
};

const isActive = (item) => {
    return route().current(item.path);
};

const toggleDrawer = () => {
    drawerStore.toggleDrawer();
};

// Manejo del scroll para mostrar/ocultar la navegación
const showNav = ref(true);
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                showNav.value = false; // Ocultar navegación al desplazarse hacia abajo
            } else {
                showNav.value = true; // Mostrar navegación al desplazarse hacia arriba
            }
            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.custom-app-bar {
    height: 80px; /* Altura personalizada */
}

.img-logo {
    height: 50px;
    max-height: 100px;
}

.hover-effect {
    transition: color 0.3s ease; /* Transición suave */
}

.hover-effect:hover {
    color: white !important; /* Cambiar el color a blanco cuando el hover esté activo */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.first-app-bar {
    position: relative !important;
}

.second-app-bar {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 4 !important;
}

/* Añade un espaciador para compensar el app-bar fijo */
.v-app-bar + .v-main {
    padding-top: 64px !important; /* Ajusta este valor según la altura de tu segundo app-bar */
}
</style>
