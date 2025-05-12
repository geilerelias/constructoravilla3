<template>
    <!-- Footer -->
    <section class="footer-section pt-10">
        <v-footer
            class="d-flex flex-column"
            color="secondary"
            rounded="rounded-t-lg"
        >
            <v-container class="container" fluid>
                <v-row justify="space-around">
                    <!-- About Section -->
                    <v-col cols="12" md="3" class="text-left">
                        <h3 class="text-h6 font-weight-bold text-white">
                            About
                        </h3>
                        <p class="text-body-2 text-white text-justify">
                            Somos una empresa líder en construcción,
                            especializada en soluciones innovadoras de
                            infraestructura, entregando calidad y excelencia en
                            cada proyecto que realizamos.
                        </p>
                        <div class="social-icons mt-4">
                            <v-icon size="24" color="white" class="mr-3"
                                >mdi-twitter</v-icon
                            >
                            <v-icon size="24" color="white" class="mr-3"
                                >mdi-linkedin</v-icon
                            >
                            <v-icon size="24" color="white"
                                >mdi-instagram</v-icon
                            >
                        </div>
                    </v-col>

                    <!-- Quick Links -->
                    <v-col cols="12" md="3" class="text-left">
                        <h3 class="text-h6 font-weight-bold text-white">
                            Quick Links
                        </h3>
                        <ul class="footer-links d-flex flex-wrap">
                            <li
                                class="mx-2"
                                v-for="route in routes"
                                :key="route.name"
                            >
                                <Link
                                    :href="route.path"
                                    class="text-body-2 text-white"
                                >
                                    {{ route.name }}
                                </Link>
                            </li>
                        </ul>
                    </v-col>

                    <!-- Latest Posts -->
                    <v-col cols="12" md="3" class="text-left">
                        <h3 class="text-h6 font-weight-bold text-white">
                            Latest Posts
                        </h3>
                        <div class="latest-post">
                            <h4 class="text-body-2 text-yellow">Road</h4>
                            <p class="text-body-2 text-white">Highway</p>
                            <p class="text-body-2 text-white">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </v-col>

                    <!-- Tag Clouds -->
                    <v-col cols="12" md="3" class="text-left">
                        <h3 class="text-h6 font-weight-bold text-white">
                            Tag Clouds
                        </h3>
                        <div class="tag-clouds">
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                                >Blog</v-btn
                            >
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                                >Bridge</v-btn
                            >
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                                >Building</v-btn
                            >
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                                >Road</v-btn
                            >
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                                >Tunnel</v-btn
                            >
                            <v-btn
                                size="small"
                                variant="text"
                                class="mx-1 text-capitalize px-1"
                            >
                                Uncategorized
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
        <v-footer color="primary" class="d-flex flex-column">
            <v-container class="container" fluid>
                <!-- Footer Bottom -->
                <v-row justify="space-between" class="bg-primary">
                    <v-col cols="12" md="6" class="text-left text-white">
                        © 2024 -
                        {{ new Date().getFullYear() }} ConstructoraVilla III
                    </v-col>
                    <v-col cols="12" md="6" class="text-right">
                        <a href="#" class="text-body-2 text-white mx-2"
                            >Privacy Policy</a
                        >
                        <a href="#" class="text-body-2 text-white mx-2"
                            >Terms & Conditions</a
                        >
                        <a href="#" class="text-body-2 text-white mx-2"
                            >About</a
                        >
                        <a href="#" class="text-body-2 text-white mx-2"
                            >Services</a
                        >
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </section>
</template>

<script setup>
import { useRoutesStore } from "@/../stores/routesStore"; // Importar el store de rutas
import { Link } from "@inertiajs/vue3";
const routesStore = useRoutesStore(); // Usar el store de rutas
const routes = routesStore.routes;
</script>

<style scoped>
.footer-section {
    color: white;
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    text-decoration: none;
    color: white;
}

.footer-links a:hover {
    text-decoration: underline;
}
</style>
