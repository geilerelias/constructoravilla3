<template>
    <PageLayout title="Procesos">
        <section id="header">
            <v-img
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                cover
                height="50vh"
                :src="bg"
                class="home-carousel-image"
            >
                <template #placeholder>
                    <v-row class="fill-height" align="center" justify="center">
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-3"
                        />
                    </v-row>
                </template>
                <v-container
                    class="fill-height d-flex flex-column justify-center align-center text-center text-white"
                >
                    <h1 class="text-h2 font-weight-bold mb-4 text-uppercase">
                        Proceso
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        Entiende nuestro proceso aquí.
                    </p>
                </v-container>
            </v-img>
        </section>

        <v-container class="process-section py-10">
            <v-row>
                <v-col cols="12" class="text-center mb-10">
                    <div
                        class="text-h4 font-weight-bold text-dark text-primary aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light">Nuestro </span><br />
                        <span class="text-secondary font-weight-black">Proceso de Trabajo</span>
                    </div>
                    <v-divider class="mx-auto mt-3 mb-6" style="width: 80px" />
                </v-col>
            </v-row>

            <v-row dense>
                <v-col
                    v-for="(step, index) in steps"
                    :key="index"
                    cols="12"
                    md="6"
                    class="mb-6"
                    :data-aos="'fade-up'"
                    :data-aos-delay="(index + 1) * 100"
                    data-aos-duration="800"
                >
                    <v-card class="pa-4 elevation-2">
                        <v-row no-gutters align="center">
                            <v-col cols="auto" class="pr-4">
                                <v-icon size="36" color="primary">{{ step.icon }}</v-icon>
                            </v-col>
                            <v-col>
                                <h3 class="text-h6 font-weight-bold mb-2">{{ step.title }}</h3>
                                <p class="text-body-2">{{ step.description }}</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-sheet class="bg-secondary py-md-15 py-sm-8 py-8">
            <v-container>
                <v-row justify="space-between">
                    <v-col class="pb-sm-4 pb-1" cols="12" md="3">
                        <div class="pt-2 mb-0 d-flex align-center">
                            <v-avatar
                                class="v-avatar--density-default v-avatar--variant-flat secondary lighten-2"
                                color="primary"
                                size="72"
                            >
                                <v-icon
                                    class="mdi-map-marker mdi"
                                    size="36"
                                />
                            </v-avatar>
                            <div class="d-flex justify-center align-center">
                                <div class="d-inline ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 secondary--text"
                                    >
                                        Visítanos
                                    </h4>
                                    <h5
                                        class="font-weight-medium text-body-1 text-white ml-2"
                                    >
                                        <a class="font-weight-medium "
                                           href="https://www.google.com/maps?q=Calle+85c+71-57+Barranquilla">
                                            Calle 85c 71-57 local 6 Barranquilla
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </v-col>

                    <v-col class="pb-sm-4 pb-1" cols="12" md="3">
                        <div class="pt-2 mb-0 d-flex align-center">
                            <v-avatar
                                class="v-avatar--density-default v-avatar--variant-flat grey lighten-2"
                                color="primary"
                                size="72"
                            >
                                <v-icon class="mdi-phone mdi" size="36"/>
                            </v-avatar>
                            <div
                                class="d-flex flex-column justify-center align-center"
                            >
                                <div class="d-inline ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 secondary--text"
                                    >
                                        Llámanos
                                    </h4>
                                    <a
                                        class="text-decoration-none"
                                        href="tel:+57 012 3456789"
                                    >
                                        <h5
                                            class="font-weight-medium text-body-1 text-white"
                                        >
                                            <a class="font-weight-medium"
                                               href="tel:+573045835556">
                                                304 583 5556
                                            </a>
                                        </h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="12" md="4">
                        <div class="pt-2 mb-0 d-flex align-center">
                            <v-avatar
                                class="v-avatar--density-default v-avatar--variant-flat grey lighten-2"
                                color="primary"
                                size="72"
                            >
                                <v-icon class="mdi-email mdi" size="36"/>
                            </v-avatar>
                            <div
                                class="d-flex flex-column justify-center align-center"
                            >
                                <div class="d-inline ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 secondary--text"
                                    >
                                        Escríbenos
                                    </h4>
                                    <div class="d-flex">
                                        <a
                                            class="text-decoration-none font-weight-medium text-body-1 text-white"
                                            href="mailto:contacto@constructoravillaiii.com"
                                        >
                                            contacto@constructoravillaiii.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        <v-container class="process-section py-10">
            <v-row>
                <v-col cols="12" class="text-center mb-10">
                    <div
                        class="text-h4 font-weight-bold text-dark text-primary aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light">Ciclo del Proceso </span><br />
                        <span class="text-secondary font-weight-black">Constructivo</span>
                    </div>
                    <v-divider class="mx-auto mt-3 mb-6" style="width: 80px" />
                </v-col>
            </v-row>

            <v-timeline side="alternate" align="start" density="comfortable">
                <v-timeline-item
                    v-for="(step, index) in steps"
                    :key="index"
                    :dot-color="'primary'"
                    :icon="step.icon"
                    fill-dot
                    :data-aos="'fade-up'"
                    :data-aos-delay="index * 150"
                    data-aos-duration="800"
                >
                    <template #icon>
                        <v-icon  color="white">{{ step.icon }}</v-icon>
                    </template>

                    <v-card class="pa-4 elevation-2">
                        <div class="mb-2 text-caption text-primary text-uppercase font-weight-bold">
                            {{ step.order }}
                        </div>
                        <h3 class="text-subtitle-1 font-weight-bold mb-2">
                            {{ step.title }}
                        </h3>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-container>


    </PageLayout>
</template>

<script setup>
import bg from "@images/header/bg-process.jpg";
import PageLayout from "@/Layouts/PageLayout.vue";
const steps = [
    {
        order: "Primero",
        title: "Planificación y Diseño",
        description: "Definimos objetivos, diseño arquitectónico y presupuesto.",
        icon: "mdi-pencil-ruler",
    },
    {
        order: "Segundo",
        title: "Preparación del Terreno",
        description: "Nivelamos y acondicionamos el terreno para una base segura.",
        icon: "mdi-shovel",
    },
    {
        order: "Tercero",
        title: "Cimentación",
        description: "Construcción de los cimientos estructurales.",
        icon: "mdi-home-floor-a",
    },
    {
        order: "Cuarto",
        title: "Estructura",
        description: "Se levantan columnas, vigas y techos según el diseño.",
        icon: "mdi-office-building",
    },
    {
        order: "Quinto",
        title: "Instalaciones",
        description: "Sistemas eléctricos, plomería y redes son instalados.",
        icon: "mdi-tools",
    },
    {
        order: "Sexto",
        title: "Acabados",
        description: "Aplicación de pintura, pisos, carpintería y estética final.",
        icon: "mdi-format-paint",
    },
    {
        order: "Séptimo",
        title: "Inspección y Pruebas",
        description: "Se validan estándares de calidad y funcionalidad.",
        icon: "mdi-clipboard-check",
    },
];


</script>

<style scoped>
.process-section {
    background-color: #f9f9f9;
}

.v-timeline-item .v-card {
    transition: transform 0.3s ease;
}
.v-timeline-item .v-card:hover {
    transform: scale(1.03);
}

</style>
