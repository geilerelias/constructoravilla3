<template>
    <PageLayout title="Servicios">
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
                    <h1 class="text-h2 font-weight-bold mb-4 text-uppercase">
                        Servicios
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        Explora los servicios que ofrecemos.
                    </p>
                </v-container>
            </v-img>
        </section>

        <v-container class="services-section py-10">
            <v-row>
                <v-col class="text-center mb-6" cols="12">
                    <div
                        class="text-h4 font-weight-bold text-dark text-primary aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light">
                            Nuestros Servicios </span
                        ><br/>
                        <span
                            class="ml-16 text-secondary font-weight-bold font-weight-black"
                        >
                            Soluciones para tus proyectos
                        </span>
                    </div>

                    <v-responsive
                        class="rounded-lg bg-primary mx-auto mb-6 mt-3"
                        max-width="100px"
                    >
                        <v-divider class="pb-1 rounded-lg" light></v-divider>
                    </v-responsive>

                    <p class="text-body-1">
                        Constructora Villa III SAS se complace en brindar una
                        gama de servicios que permitan satisfacer sus
                        necesidades en el ámbito de la construcción, permitiendo
                        brindarle soluciones creativas e innovadoras bajo
                        requisitos exactos en cada una de sus propuestas,
                        convirtiéndonos en un aliado confiable y seguro para
                        cada uno de sus proyectos.
                    </p>
                </v-col>
            </v-row>

            <!--            <v-row>
                            <v-col
                                v-for="(categoria, index) in categorias"
                                :key="index"
                                class="mb-sm-6"
                                cols="12"
                                data-aos="flip-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                md="4"
                            >
                                <v-card
                                    class="hover-card aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                >
                                    <a class="text-decoration-none" href="#">
                                        <v-img
                                            :src="categoria.image"
                                            alt="Servicio"
                                            class="rounded-lg zoom-in w-100 h-100"
                                            contain
                                            height="200"
                                        />
                                    </a>
                                    <v-card-text>
                                        <div class="mt-4" data-aos="fade-right">
                                            <h5 class="text-h5 font-weight-bold">
                                                {{ categoria.titulo }}
                                            </h5>
                                            <ul>
                                                <li
                                                    v-for="(item, idx) in categoria.items"
                                                    :key="idx"
                                                    class="d-flex align-center mb-2"
                                                >
                                                    <v-icon
                                                        class="mr-2"
                                                        color="primary"
                                                        size="20"
                                                    >mdi-check-circle
                                                    </v-icon
                                                    >
                                                    <span>{{ item }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>-->

        </v-container>

        <div class="py-md-12 py-5">
            <div v-for="(categoria, index) in categorias" :key="index" :class="index%2===0?'bg-grey-lighten-3':'bg-white'"
                 class="py-md-10 py-sm-5">
                <v-container>
                    <v-row>
                        <v-col :order="index%2===0?'last':'firts'" cols="12" md="5">
                            <div class="service-speciality-content mb-13 mb-lg-0 aos-init aos-animate"
                                 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                                <div class="mt-4" data-aos="fade-right">
                                    <h5 class="text-h3 font-weight-light mb-2">
                                        {{ categoria.titulo }}
                                    </h5>
                                    <ul>
                                        <li
                                            v-for="(item, idx) in categoria.items"
                                            :key="idx"
                                            class="d-flex align-center mb-2"
                                        >
                                            <v-icon
                                                class="mr-2"
                                                color="primary"
                                                size="20"
                                            >
                                                mdi-check-circle
                                            </v-icon>
                                            <span>{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <Link :href="route('contact')">
                                    <v-btn
                                        class="bg-primary rounded-md mt-5"
                                        density="default"
                                        size="large"
                                        style="text-transform: capitalize; letter-spacing: 0px;"
                                        type="button"
                                        variant="flat"
                                    >
                                        Empezar
                                    </v-btn>
                                </Link>
                            </div>
                        </v-col>
                        <v-col cols="12" md="7">
                            <v-card
                                :data-aos="mobile ? 'fade-up' : 'flip-up'"
                                class="hover-card"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <v-img
                                    :src="categoria.image"
                                    alt="about2"
                                    class="zoom-in"
                                    cover
                                >
                                    <template v-slot:placeholder>
                                        <div
                                            class="d-flex align-center justify-center fill-height"
                                        >
                                            <v-progress-circular
                                                color="grey-lighten-4"
                                                indeterminate
                                            ></v-progress-circular>
                                        </div>
                                    </template>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>

        <section>
            <v-container>
                <v-row>
                    <v-col
                        v-for="(item, index) in services"
                        :key="index"
                        cols="12"
                        md="3"
                        sm="6"
                    >
                        <v-div
                            class="hover-card"
                            color="transparent"
                            elevated="0"
                        >
                            <div
                                :data-aos="mobile ? 'fade-up' : 'flip-up'"
                                class="hover-card"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <a class="text-decoration-none" href="#">
                                    <v-img
                                        :src="item.img"
                                        alt="about2"
                                        class="zoom-in rounded-circle"
                                        cover
                                        style="height: 200px; width: 200px"
                                    >
                                        <template v-slot:placeholder>
                                            <div
                                                class="d-flex align-center justify-center fill-height"
                                            >
                                                <v-progress-circular
                                                    color="grey-lighten-4"
                                                    indeterminate
                                                ></v-progress-circular>
                                            </div>
                                        </template>
                                    </v-img>
                                </a>
                            </div>

                            <div
                                :data-aos="mobile ? 'fade-up' : 'fade-right'"
                                class="mt-4"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <h5 class="text-h6 font-weight-bold text-13">
                                    {{ item.title }}
                                </h5>
                            </div>

                            <div
                                :data-aos="
                                        mobile ? 'fade-up' : 'fade-right'
                                    "
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <p
                                    class="text-description font-weight-regular"
                                >
                                    {{ item.description }}
                                </p>
                            </div>
                        </v-div>
                    </v-col>
                </v-row>
            </v-container>
        </section>


        <section>
            <v-container>
                <div
                    class="bg-primary py-sm-15 py-7 px-lg-16 px-4 mt-12 rounded-lg"
                >
                    <div class="px-sm-6 px-3">
                        <v-row>
                            <v-col class="v-col-md-6 v-col-12">
                                <h2
                                    class="text-h4 mb-6 text-sm-start text-center text-white"
                                >
                                    ¿Tienes alguna pregunta?
                                </h2>
                                <p
                                    class="text-body-1 font-weight-regular text-sm-start text-center text-white"
                                >
                                    Somos un equipo dedicado de expertos en
                                    construcción, diseño arquitectónico y
                                    supervisión técnica, comprometidos con
                                    la excelencia en cada proyecto.
                                </p>
                            </v-col>
                            <v-col class="v-col-md-6 v-col-12">
                                <v-row>
                                    <v-col>
                                        <div class="hover-card">
                                            <v-img
                                                :src="img04"
                                                alt="about1"
                                                class="zoom-in w-100 h-100"
                                                cover
                                                rounded="lg"
                                                style="
                                                        height: 200px !important;
                                                    "
                                            />
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="hover-card">
                                            <v-img
                                                :src="img09"
                                                alt="about2"
                                                class="zoom-in w-100 h-100"
                                                cover
                                                rounded="lg"
                                                style="
                                                        height: 200px !important;
                                                    "
                                            />
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="v-col-12">
                                <div
                                    class="d-sm-flex justify-md-end justify-sm-start justify-center position-relative"
                                >
                                    <div class="mr-sm-13">
                                        <div class="text-body-1 mb-2">
                                            Teléfono
                                        </div>
                                        <div class="d-flex align-center">
                                            <a
                                                class="text-decoration-none"
                                                href="tel:+573045835556"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-phone
                                                </v-icon>
                                            </a>
                                            &nbsp;
                                            <a
                                                class="mr-1"
                                                href="wa.me/message/+573045835556"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-whatsapp
                                                </v-icon>
                                            </a>
                                            <a href="tel:3045835556">
                                                <h5
                                                    class="font-weight-medium text-white"
                                                >
                                                    +304 583 5556
                                                </h5>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            class="text-sm-14 text-body-1 mt-sm-0 mt-4 mb-2"
                                        >
                                            Email
                                        </div>
                                        <div class="d-flex align-center">
                                            <a
                                                class="text-decoration-none mr-1"
                                                href="mailto:contacto@constructoravillaiii.com"
                                                target="_blank"
                                            >
                                                <v-icon color="white">
                                                    mdi-email
                                                </v-icon>
                                            </a>

                                            <a
                                                class="text-caption font-weight-bold text-white text-decoration-none lh-normal"
                                                href="mailto:contacto@constructoravillaiii.com"
                                                rel="noopener noreferrer"
                                            >
                                                contacto@constructoravillaiii.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-container>
        </section>
    </PageLayout>
</template>

<script setup>
import {ref} from "vue";
import PageLayout from "@/Layouts/PageLayout.vue";

import service1 from "@images/obras-civiles.jpg";
import service2 from "@images/diseno-remodelacion.jpg";
import service3 from "@images/asesoria-tecnica.jpg";
import service4 from "@images/sostenibilidad.jpg";
import bg from "@images/header/bg-services.jpg";
import serviceDesing from "@images/services/design.jpg";
import serviceConstruction from "@images/services/construction.jpg";
import serviceRemodeling from "@images/services/remodeling.jpg";
import img04 from "@images/img00004.jpg";
import img09 from "@images/img00009.jpg";

const categorias = [
    {
        titulo: "Diseño",
        image: serviceDesing,
        items: [
            "Diseños Arquitectónicos",
            "Diseño Urbano, Urbanístico",
            "Diseño de Obras Civiles",
            "Diseño Estructural",
            "Diseño Hidráulico y Sanitario",
            "Diseño Eléctrico",
            "Diseño e instalación de sistemas de paneles solares",
            "Interventoría y consultoría de obras civiles",
        ],
    },
    {
        titulo: "Construcción",
        image: serviceConstruction,
        items: [
            "Construcciones Arquitectónicas en edificaciones y viviendas",
            "Construcciones Obra Negra y Gris",
            "Obras civiles y sistemas hidrosanitarios",
            "Asesoría técnica-profesional",
            "Interventoría",
            "Instalaciones eléctricas",
            "Instalación y mantenimiento de paneles solares",
            "Soluciones de energía renovable",
            "Suministro de insumos",
            "Dirección de obras",
            "Elaboración de presupuestos",
        ],
    },
    {
        titulo: "Remodelación",
        image: serviceRemodeling,
        items: [
            "Restauración",
            "Mantenimiento de edificaciones",
            "Adecuación de espacios",
            "Acabados en obra blanca",
            "Rediseños",
        ],
    },
];

const services = ref([
    {
        img: service1,
        icon: "mdi-domain",
        title: "Obras Civiles",
        description:
            "Especializados en la construcción de obras civiles e infraestructura de alta calidad.",
    },
    {
        img: service2,
        icon: "mdi-pencil-ruler",
        title: "Diseño y Remodelación",
        description:
            "Ofrecemos diseño arquitectónico y remodelaciones innovadoras y sostenibles.",
    },
    {
        img: service3,
        icon: "mdi-account-tie",
        title: "Asesoría Técnica",
        description:
            "Brindamos asesoría técnica y profesional en áreas de la construcción e interventoría.",
    },
    {
        img: service4,
        icon: "mdi-leaf",
        title: "Sostenibilidad",
        description:
            "Comprometidos con propuestas sostenibles y amigables con el medio ambiente.",
    },
]);
</script>

<style scoped>
.services-section {
    background-color: #f9f9f9;
    padding: 2rem;
}
</style>
