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
                    <v-col class="text-left" cols="12" md="3">

                        <v-img :src="Logo" class=""></v-img>
                        <div class="social-icons mt-4 justify-center align-center">
                            <v-icon class="mr-3" color="white" size="24"
                            >mdi-twitter
                            </v-icon
                            >
                            <v-icon class="mr-3" color="white" size="24"
                            >mdi-linkedin
                            </v-icon
                            >
                            <v-icon color="white" size="24"
                            >mdi-instagram
                            </v-icon
                            >
                        </div>
                    </v-col>

                    <!-- About Section -->
                    <v-col class="text-left" cols="12" md="3">
                        <h3 class="text-h6 font-weight-bold text-white">
                            Nosotros
                        </h3>
                        <p class="text-body-2 text-white">
                            Somos una empresa líder en construcción,
                            especializada en soluciones innovadoras de
                            infraestructura, entregando calidad y excelencia en
                            cada proyecto que realizamos.
                        </p>
                    </v-col>

                    <!-- Quick Links -->
                    <v-col class="text-left" cols="12" md="3">
                        <h3 class="text-h6 font-weight-bold text-white">
                            Accesos rápidos
                        </h3>
                        <ul class="footer-links d-flex flex-wrap">
                            <li
                                v-for="route in routes"
                                :key="route.name"
                                class="mx-2"
                            >
                                <Link
                                    :href="route.path"
                                    class="text-body-2 text-white"
                                >
                                    <v-btn density="compact" variant="outlined">
                                        {{ route.name }}
                                    </v-btn>
                                </Link>
                            </li>
                        </ul>
                    </v-col>

                </v-row>
            </v-container>
        </v-footer>
        <v-footer class="d-flex flex-column" color="primary">
            <v-container class="container" fluid>
                <!-- Footer Bottom -->
                <v-row class="bg-primary" justify="space-between">
                    <v-col class="text-left text-white" cols="12" md="6">
                        © 2024 -
                        {{ new Date().getFullYear() }} ConstructoraVilla III
                    </v-col>
                    <v-col class="text-right" cols="12" md="6">
                        <a class="text-body-2 text-white mx-2" href="#"
                        >Privacy Policy</a
                        >
                        <a class="text-body-2 text-white mx-2" href="#"
                        >Terms & Conditions</a
                        >
                        <a class="text-body-2 text-white mx-2" href="#"
                        >About</a
                        >
                        <a class="text-body-2 text-white mx-2" href="#"
                        >Services</a
                        >
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </section>
</template>

<script setup>
import {useRoutesStore} from "@/../stores/routesStore"; // Importar el store de rutas
import {Link} from "@inertiajs/vue3";
import Logo from "@images/logo/logo-original-2.png"
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
