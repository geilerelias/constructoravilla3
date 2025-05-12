<template>
    <PageLayout title="Nosotros">
        <section id="header">
            <v-img
                :src="bg"
                class="home-carousel-image"
                cover
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                height="50vh"
            >
                <template #placeholder>
                    <v-row align="center" class="fill-height" justify="center">
                        <v-progress-circular
                            color="grey lighten-3"
                            indeterminate
                        />
                    </v-row>
                </template>
                <v-container
                    class="fill-height d-flex flex-column justify-center align-center text-center text-white"
                >
                    <h1 class="text-h2 tx-sm-h5 font-weight-bold mb-4 text-uppercase">
                        Sobre Nosotros
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        En esta sección podrá conocer quiénes somos, qué hacemos y qué nos distingue.
                    </p>
                </v-container>
            </v-img>
        </section>

        <v-container class="about-section py-10 container">
            <v-row
                class="align-center justify-md-space-between justify-center pb-5 pt-12"
            >
                <v-col class="v-col-md-6 v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile ? 'fade-up' : 'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <span class="font-weight-light"> ¿Quiénes </span>
                            <br/>
                            <span
                                class="text-secondary ml-16 font-weight-bold font-weight-black"
                            >
                                Somos?
                            </span>
                        </h2>
                        <v-responsive
                            class="rounded-lg bg-primary mr-auto mb-6"
                            style="max-width: 100px"
                        >
                            <v-divider class="pb-1 rounded-lg" light/>
                        </v-responsive>

                        <p
                            :data-aos="mobile ? 'fade-up' : 'fade-up'"
                            class="text-body-1 text-justify text-muted position-relative z-index1"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        >
                            Constructora Villa III S.A.S es una empresa dedicada
                            a la construcción de obras civiles, infraestructura,
                            diseño, construcción y remodelación arquitectónico,
                            así mismo asesoría técnica y profesional en áreas de
                            la construcción, interventoría entre otros. Nuestro
                            compromiso es crear y ejecutar obras con altos
                            estándares de calidad, productividad y
                            responsabilidad, satisfaciendo las expectativas del
                            cliente. Brindando propuestas con eficiencia
                            económica, sostenibles y amigables con el medio
                            ambiente que nos permitan trascender en el tiempo.
                        </p>
                    </div>
                </v-col>
                <v-col class="v-col-md-6 v-col-12">
                    <div class="pl-sm-6">
                        <div :data-aos="mobile ? 'fade-up' : 'fade-right'"
                             class="hover-card"
                             variant="elevated"
                             data-aos-delay="200" data-aos-duration="1000">
                            <v-img
                                :src="bgAbout"
                                alt="about2"
                                class="zoom-in w-100 h-100"
                                cover
                                rounded="lg"

                            />
                        </div>

                        <div :data-aos="mobile ? 'fade-up' : 'fade-right'"
                             class="hover-card"
                             variant="elevated"
                             data-aos-delay="200" data-aos-duration="1000">
                            <v-img
                                src="https/no hay nada"
                                alt="about2"
                                class="zoom-in w-100 h-100"
                                cover
                                rounded="lg"
                            >
                                <template #placeholder>
                                    <v-skeleton-loader
                                        class="w-100 h-100 fill-height bg-red"
                                        type="image"
                                    />
                                </template>
                            </v-img>
                        </div>

                    </div>
                </v-col>
            </v-row>
        </v-container>

        <section class="bg-secondary bg-dark py-md-12 py-5">
            <v-container class="pt-md-10 pt-sm-5">
                <v-row class="justify-space-between">
                    <v-col
                        :data-aos="mobile ? 'fade-up' : 'fade-up'"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h2
                            :data-aos="mobile ? 'fade-up' : 'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-white mb-4"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <span class="font-weight-light"> Misión y visión </span>
                            <br/>
                            <span
                                class="ml-16 font-weight-bold font-weight-medium"
                            >
                                empresarial
                            </span>
                        </h2>
                        <v-responsive
                            class="rounded-lg bg-primary mr-auto mb-6"
                            style="max-width: 100px"
                        >
                            <v-divider class="pb-1 rounded-lg" light/>
                        </v-responsive>
                        <p class="text-body-1 text-muted my-4">
                            Constructora Villa III S.A.S se especializa en obras civiles, diseño y remodelación, con
                            un enfoque en calidad, sostenibilidad y compromiso con el medio ambiente. Aspiramos a
                            ser líderes en el sector de la construcción en la región caribe.
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container fluid>
                <div class="bg-white pa-md-12 py-5 rounded rounded-lg">
                    <v-row align="center" class="py-md-10 py-sm-5">
                        <!-- Columna de texto -->
                        <v-col :data-aos=" mobile ? 'fade-up' : 'fade-right' " cols="12"
                               data-aos-delay="200" data-aos-duration="1000" md="5">
                            <div class="pr-md-10">
                                <h2
                                    class="d-flex text-primary justify-start  text-h4 font-weight-black  pt-2 fill-width text-h2 text-dark mb-4"
                                >
                                    Misión
                                </h2>
                                <p class="text-muted text-body-1 text-justify">
                                    Somos una empresa que se desarrolla en el sector de la
                                    construcción, brindando servicios que satisfagan las
                                    necesidades del cliente en calidad, tiempo y costos.
                                    Apoyados en un recurso humano y tecnológico que nos
                                    permiten contribuir al desarrollo y la sostenibilidad.
                                </p>
                            </div>
                        </v-col>

                        <!-- Columna del carrusel -->
                        <v-col cols="12" md="7">
                            <v-img
                                :src="Mission"
                                class="rounded-lg fill-height"
                                cover
                            >
                            </v-img>
                        </v-col>
                    </v-row>
                </div>

                <div class="bg-white pa-md-12 py-5 mt-10 rounded rounded-lg">
                    <v-row align="center" class="py-md-10 py-sm-5">
                        <!-- Columna del carrusel -->
                        <v-col cols="12" md="7">
                            <v-img
                                :src="Vission"
                                class="rounded-lg fill-height"
                                cover
                            >
                            </v-img>
                        </v-col>
                        <!-- Columna de texto -->
                        <v-col :data-aos=" mobile ? 'fade-up' : 'fade-left' " cols="12"
                               data-aos-delay="200" data-aos-duration="1000" md="5">
                            <div class="pr-md-10">
                                <h2
                                    class="d-flex text-primary justify-start text-h4 font-weight-black  pt-2 fill-width text-h2 text-dark mb-4"
                                >
                                    Visión
                                </h2>
                                <p class="text-muted text-body-1 text-justify">
                                    Consolidarnos como una empresa líder en el sector de la
                                    construcción en la región caribe. Siendo reconocidos por
                                    el desarrollo de obras con altos estándares de calidad,
                                    seguridad, responsabilidad y nuestro compromiso con el
                                    medio ambiente.
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <CorporateValues></CorporateValues>

        <TeamMembers></TeamMembers>

        <section class="bg-secondary py-md-15 py-8">
            <div class="py-md-8 py-sm-5">
                <v-container class="">
                    <v-row class="align-center justify-space-between">
                        <v-col class="" cols="12" md="5">
                            <div>
                                <div class="d-flex align-center mb-5">
                                    <span
                                        class="bg-success pa-2 rounded-circle mr-2"
                                    >
                                    </span>
                                    <h6
                                        class="text-h4 text-white font-weight-bold"
                                    >
                                        Podemos ayudar
                                    </h6>
                                </div>
                                <h2 class="text-h6 py-6 text-white">
                                    Hablemos sobre cómo podemos construir tus
                                    sueños y transformar tus ideas en realidad
                                    con Constructora Villa III.
                                </h2>
                                <v-row>
                                    <v-col class="v-col-12"
                                    ><h6
                                        class="text-body-1 text-muted font-weight-regular"
                                    >
                                        Teléfono
                                    </h6>
                                        <div class="d-flex align-center">
                                            <a
                                                class="text-decoration-none"
                                                href="tel:+573116500061"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-phone
                                                </v-icon>
                                            </a>
                                            &nbsp;
                                            <a
                                                href="https://wa.me/573045835556"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-whatsapp
                                                </v-icon>
                                            </a>
                                            &nbsp;
                                            <a
                                                class="font-weight-medium text-white"
                                                href="tel:+573045835556"
                                            >
                                                304 583 5556
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">
                                        <h6
                                            class="text-body-1 text-muted font-weight-regular"
                                        >
                                            Email
                                        </h6>
                                        <div class="d-flex align-center">
                                            <a
                                                class="text-decoration-none"
                                                href="mailto:contacto@constructoravillaiii.com"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-email
                                                </v-icon>
                                            </a>

                                            <a
                                                class="font-weight-medium text-white ml-2"
                                                href="mailto:contacto@constructoravillaiii.com"
                                            >
                                                contacto@constructoravillaiii.com
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">
                                        <h6
                                            class="text-body-1 text-muted font-weight-regular"
                                        >
                                            Localización
                                        </h6>
                                        <div class="d-flex">
                                            <a
                                                class="text-decoration-none"
                                                href="https://www.google.com/maps?q=Calle+85c+71-57+Barranquilla"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-map-marker
                                                </v-icon>
                                            </a>
                                            <a
                                                class="font-weight-medium text-white ml-2"
                                                href="https://www.google.com/maps?q=Calle+85c+71-57+Barranquilla"
                                            >
                                                Calle 85c 71-57 local 6
                                                Barranquilla
                                            </a>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>

                        <v-col class="v-col-md-5 v-col-12">
                            <v-card
                                class="elevation-0 rounded-md"
                                variant="elevated"
                            >
                                <div class="pa-md-11 pa-sm-8 pa-4">
                                    <h4
                                        class="text-dark text-h6 font-weight-bold mb-7"
                                    >
                                        Iniciar el proyecto
                                    </h4>
                                    <v-form class="project-form" novalidate="">
                                        <v-row class="v-row" no-gutters>
                                            <v-col
                                                class="pr-2"
                                                cols="12"
                                                sm="6"
                                            >
                                                <v-text-field
                                                    density="compact"
                                                    label="Nombres"
                                                    variant="outlined"
                                                >
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    density="compact"
                                                    label="Apellidos"
                                                    variant="outlined"
                                                >
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field
                                                    color="primary"
                                                    density="compact"
                                                    label="Email"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                class="pl-2"
                                                cols="12"
                                                sm="6"
                                            >
                                                <v-text-field
                                                    color="primary"
                                                    density="compact"
                                                    label="País o región"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-textarea
                                                    color="primary"
                                                    density="compact"
                                                    label="Cuéntanos sobre el proyecto"
                                                    variant="outlined"
                                                ></v-textarea>
                                            </v-col>
                                            <v-col class="mb-1" cols="12">
                                                <div class="ml-n2">
                                                    <div
                                                        class="d-flex align-center"
                                                    >
                                                        <v-checkbox-btn></v-checkbox-btn>
                                                        <div
                                                            class="text-muted pl-2"
                                                        >
                                                            I have read and
                                                            acknowledge the
                                                            <a
                                                                aria-current="page"
                                                                class="router-link-active router-link-exact-active opacity-1 text-decoration-none text-primary"
                                                                href="/"
                                                            >
                                                                Terms and
                                                                Conditions
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col class="v-col v-col-12 pt-0">
                                                <v-btn
                                                    block=""
                                                    class="bg-primary rounded-md"
                                                    size="large"
                                                    style="
                                                        text-transform: capitalize;
                                                        letter-spacing: 0px;
                                                    "
                                                    variant="flat"
                                                >
                                                    enviar consulta
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>

    </PageLayout>
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from "@images/header/bg-about.jpg";
import bgAbout from "@images/contact.jpg";
import {useDisplay} from "vuetify";
import Mission from "@images/miembros-de-los-sindicatos-trabajando-juntos.jpg"
import Vission from "@images/junta-trabajo-futuro.jpg"
import CorporateValues from "@/Components/CorporateValues.vue";
import TeamMembers from "@/Components/TeamMembers.vue";
import bgValores from "@images/valores-construccion.JPG";

const {
    xsOnly,
    xs,
    mobile,
    md,
    mdAndDown,
    mdAndUp,
    lgAndUp,
    smAndUp,
    smAndDown,
} = useDisplay();

const valores = [
    {
        title: "Compromiso",
        icon: "mdi-checkbox-marked-circle-outline",
        description:
            "Implicación a la hora de desempeñar las tareas de forma responsable, profesional y positiva.",
        color: "blue",
    },
    {
        title: "Responsabilidad",
        icon: "mdi-account-group-outline",
        description:
            "Este valor es consecuencia del compromiso y nos muestra como un equipo humano plenamente identificado con nuestra misión y visión, con poca necesidad de control, lo que revierte en una organización con personas que pueden trabajar de forma autónoma y sin excesiva jerarquización.",
        color: "green",
    },
    {
        title: "Pasión",
        icon: "mdi-heart-outline",
        description:
            "La pasión es el motor que nos mueve. Solamente si trabajamos y actuamos con pasión, seremos excelentes en lo que hacemos. Queremos que nuestro trabajo diario demuestre pasión a través del esfuerzo por la Excelencia.",
        color: "red",
    },
    {
        title: "Eficiencia",
        icon: "mdi-clock-time-eight-outline",
        description:
            "Un correcto aprovechamiento del tiempo y de los recursos existentes, garantizando, de esta manera, la consecución de los objetivos de manera eficaz.",
        color: "amber",
    },
];
</script>

<style scoped>
.contact-section {
    background-color: #ffffff;
    padding: 2rem;
}
</style>
