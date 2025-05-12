<template>
    <v-app-bar
        :elevation="0"
        color="primary"
        density="compact"
        height="50"
        scroll-behavior="hide"
    >
        <v-container class="container">
            <v-row
                :class="
                    xs
                        ? 'flex-column align-center py-0'
                        : 'justify-space-between align-center'
                "
                class="d-flex"
            >
                <!-- Menú de navegación -->
                <v-col
                    v-if="!xs"
                    :class="smAndDown ? 'py-0' : ''"
                    class="text-center"
                    cols="auto"
                >
                    <Link
                        v-for="item in filteredRoutes"
                        :key="item.name"
                        :href="route(item.path)"
                        class="text-decoration-none text-white text-capitalize justify-center"
                    >
                        <v-btn
                            class="mx-1 text-capitalize px-1"
                            size="small"
                            variant="text"
                        >
                            {{ item.name }}
                        </v-btn>
                    </Link>
                </v-col>
                <!-- Redes sociales para pantallas grandes -->
                <v-col
                    :class="xs ? 'text-center' : ''"
                    class="text-right"
                    cols="auto"
                >
                    <v-icon
                        class="ml-4"
                        icon="mdi-facebook"
                        size="x-small"
                        @click="openLink('https://facebook.com')"
                    ></v-icon>
                    <v-icon
                        class="ml-4"
                        icon="mdi-twitter"
                        size="x-small"
                        @click="openLink('https://twitter.com')"
                    ></v-icon>
                    <v-icon
                        class="ml-4"
                        icon="mdi-instagram"
                        size="x-small"
                        @click="openLink('https://instagram.com')"
                    ></v-icon>
                    <v-icon
                        class="ml-4"
                        icon="mdi-linkedin"
                        size="x-small"
                        @click="openLink('https://linkedin.com')"
                    ></v-icon>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>

    <v-app-bar
        :class="lgAndUp ? 'py-2' : ''"
        :density="lgAndUp || smAndDown ? 'default' : 'prominent'"
        app
        class="d-flex justify-center align-center"
        color="white"
        elevated="12"
        scroll-behavior="elevate"
    >
        <v-container class="">
            <v-row
                class="d-flex justify-space-between align-center justify-center"
            >
                <v-col
                    :order="mdAndDown ? 1 : 1"
                    class="d-flex align-center text-left"
                    cols="auto"
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
                        v-if="mdAndUp"
                        :class="
                            md
                                ? 'd-flex justify-center align-center align-content-center justify-content-around align-content-space-around mx-auto'
                                : 'd-flex justify-center align-center w-full min-w-full justify-space-between mx-0'
                        "
                        :cols="mdAndDown ? '12' : 'auto'"
                        :order="mdAndDown ? 3 : 2"
                        class="rounded-0"
                        rounded="0"
                    >
                        <Link
                            v-for="item in routesStore.routes"
                            :key="item.name"
                            :href="route(item.path)"
                            class="text-decoration-none d-md-flex d-none py-0 menu text-capitalize justify-center"
                        >
                            <v-btn
                                :color="
                                    isActive(item) ? 'primary' : 'secondary'
                                "
                                :stacked="!md"
                                class="text-capitalize text-subtitle-1 hover-effect"
                                variant="text"
                            >
                                {{ item.name }}
                            </v-btn>
                        </Link>
                    </v-col>
                </transition>

                <v-col
                    :order="mdAndDown ? 2 : 3"
                    class="d-flex align-center text-right"
                    cols="auto"
                >
                    <Link :href="route('contact')">
                        <v-btn
                            v-if="!smAndDown"
                            class="text-capitalize"
                            color="primary"
                            variant="elevated"
                        >
                            Cotizar
                        </v-btn>
                    </Link>
                    <v-app-bar-nav-icon
                        v-if="smAndDown"
                        class="ml-4 pa-0 rounded-sm"
                        color="primary"
                        density="comfortable"
                        icon="mdi-menu"
                        icon-size="40px"
                        size="default"
                        variant="elevated"
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
import {computed, onMounted, onUnmounted, ref} from "vue";
import {Link, router} from "@inertiajs/vue3"; // Usar el router de Inertia
import imgLogoOriginal from "@images/logo/logo-original-2.png"; // Usar notación @
import {useDisplay} from "vuetify";
import {useRoutesStore} from "@/../stores/routesStore"; // Usar notación @
import {useDrawerStore} from "@/../stores/drawerStore"; // Usar notación @

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
