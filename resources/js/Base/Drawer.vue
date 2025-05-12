<template>
    <v-navigation-drawer
        color="white"
        app
        temporary
        v-model="drawerStore.isDrawerOpen"
        expand-on-hover
        style="
            box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px,
                rgb(0 0 0 / 14%) 0px 2px 2px 0px,
                rgb(0 0 0 / 12%) 0px 1px 5px 0px;
        "
    >
        <template v-slot:prepend>
            <v-img class="text-white" :src="imgLogoOriginal" contain>
                <div class="d-flex flex-column h-100">
                    <v-card-title class="d-flex ga-2 px-2">
                        <v-btn
                            color="secondary"
                            size="x-small"
                            icon="mdi-chevron-left"
                            variant="flat"
                            @click="drawerStore.isDrawerOpen = false"
                        ></v-btn>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="primary"
                            size="x-small"
                            icon="mdi-dots-vertical"
                            variant="flat"
                            @click="navigateTo('/user/profile')"
                        ></v-btn>
                    </v-card-title>
                </div>
            </v-img>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item
                :prepend-icon="item.icon"
                :title="item.name"
                :value="item.name"
                v-for="item in routes"
                :key="item.name"
                @click="navigateTo(route(item.path))"
                :active="isActive(item.path)"
                active-class="text-primary"
                link
            >
            </v-list-item>

            <v-list-subheader> Autenticación </v-list-subheader>
            <v-list-item
                :title="'Iniciar sesión'"
                prepend-icon="mdi-login"
                @click="navigateTo('/login')"
            >
            </v-list-item>
            <v-list-item
                :title="'Registrarse'"
                prepend-icon="mdi-account-plus"
                @click="navigateTo('/register')"
            >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { computed } from "vue";
import { router } from "@inertiajs/vue3"; // Importar router de Inertia
import { useRoutesStore } from "@/../stores/routesStore";
import { useDrawerStore } from "@/../stores/drawerStore"; // Store para manejar el estado del drawer
import imgLogoOriginal from "@images/logo/logo-and-name.png"; // Asegúrate de que la ruta sea correcta

const routesStore = useRoutesStore();
const drawerStore = useDrawerStore();

const routes = routesStore.routes;

const navigateTo = (path) => {
    router.visit(path); // Redirigir usando Inertia
    drawerStore.isDrawerOpen = false; // Cerrar el drawer después de la navegación
};

const isActive = (item) => {
    return route().current(item);
};
</script>

<style scoped>
/* Puedes personalizar estilos adicionales aquí si es necesario */
</style>
