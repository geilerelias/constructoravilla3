<template>
    <PageLayout title="Inicio">
        <v-carousel
            class="home-carousel"
            cycle
            flat
            height="80vh"
            hide-delimiters
            progress="primary"
        >
            <template v-slot:prev="{ props }">
                <v-btn
                    color="white"
                    icon="mdi-chevron-left"
                    variant="text"
                    @click="props.onClick"
                >
                </v-btn>
            </template>
            <template v-slot:next="{ props }">
                <v-btn
                    color="white"
                    icon="mdi-chevron-right"
                    variant="text"
                    @click="props.onClick"
                >
                </v-btn>
            </template>
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                height="100vh"
            >
                <v-img
                    :src="slide.image"
                    class="home-carousel-image"
                    cover
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                    height="100vh"
                >
                    <template #placeholder>
                        <v-row
                            align="center"
                            class="fill-height"
                            justify="center"
                        >
                            <v-progress-circular
                                color="grey lighten-3"
                                indeterminate
                            />
                        </v-row>
                    </template>
                    <v-container
                        class="fill-height d-flex flex-column justify-center align-center text-center text-white"
                    >
                        <h1
                            class="text-sm-h5 text-md-h4 text-lg-h3 text-xl-h2 font-weight-bold mb-4 text-uppercase"
                        >
                            {{ slide.title }}
                        </h1>
                        <p class="text-md-h6 mb-6" style="max-width: 600px">
                            {{ slide.description }}
                        </p>
                        <div>
                            <v-btn
                                class="mx-2 text-capitalize"
                                color="white"
                                text
                                @click="navigateTo('/about')"
                            >
                                {{ slide.buttons[0].text }}
                            </v-btn>
                            <v-btn
                                class="mx-2 text-capitalize"
                                color="primary"
                                @click="navigateTo('/services')"
                            >
                                {{ slide.buttons[1].text }}
                            </v-btn>
                        </div>
                    </v-container>
                </v-img>
            </v-carousel-item>
        </v-carousel>

        <v-container>
            <v-card
                :class="lgAndUp ? 'rounded-t-xl ' : 'rounded-lg'"
                class="info-section container flex justify-center"
                color="#0056a3e0"
                elevated="0"
                fluid
                rounded="0"
                style="margin-top: -76px"
            >
                <v-card-text class="mx-0 py-0">
                    <v-row
                        align="center"
                        class="d-flex flex-wrap mx-0 py-0"
                        justify="space-around"
                        no-gutters
                    >
                        <v-col
                            v-for="(info, index) in infoCards"
                            :key="index"
                            :class="[
                                { [info.classes[0]]: lgAndUp },
                                { [info.classes[1]]: sm || md },
                                { [info.classes[2]]: xs },
                            ]"
                            class="fill-height pa-2"
                            cols="12"
                            lg="3"
                            sm="6"
                        >
                            <div class="d-flex align-center justify-start">
                                <v-icon
                                    :size="mdAndUp ? 24 : 24"
                                    class="mr-2"
                                    color="white"
                                >
                                    {{ info.icon }}
                                </v-icon>
                                <div class="text-left">
                                    <h3
                                        class="text-subtitle-2 font-weight-bold text-white text-truncate"
                                    >
                                        {{ info.title }}
                                    </h3>
                                    <p class="text-caption text-white">
                                        <a
                                            v-if="info.link"
                                            :class="
                                                lgAndUp ? 'text-truncate' : ''
                                            "
                                            :href="info.link"
                                            :target="info.target"
                                            class="text-caption text-white"
                                        >
                                            {{ info.text }}
                                        </a>
                                        <span v-else>
                                            {{ info.text }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>

        <v-container class="about-section" fluid>
            <v-row>
                <v-col class="text-center" cols="12">
                    <h2
                        :data-aos="mobile ? 'fade-up' : 'fade-right'"
                        class="text-h4 font-weight-bold text-dark text-primary mb-4"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light"> Constructora </span>
                        <br/>
                        <span
                            class="text-secondary ml-16 font-weight-bold font-weight-black"
                        >
                            Villa III S.A.S
                        </span>
                    </h2>
                    <v-responsive
                        class="rounded-lg bg-primary mx-auto"
                        style="max-width: 100px"
                    >
                        <v-divider class="pb-1 rounded-lg" light/>
                    </v-responsive>
                </v-col>
                <v-col class="text-center" cols="12">
                    <v-container class="text-description">
                        Somos una empresa líder en construcción, especializada
                        en soluciones innovadoras de infraestructura, entregando
                        calidad y excelencia en cada proyecto que realizamos.
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

        <section>
            <v-container class="about-section" fluid>
                <v-row justify="space-around">
                    <v-col
                        v-for="(service, index) in services"
                        :key="index"
                        class="text-center"
                        cols="12"
                        md="3"
                    >
                        <v-icon :size="48" color="primary">
                            {{ service.icon }}
                        </v-icon>
                        <h3 class="text-h6 font-weight-bold mt-4">
                            {{ service.title }}
                        </h3>
                        <p class="text-body-2">{{ service.description }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center my-4">
                        <Link class="text-decoration-none" href="/services">
                            <v-btn color="primary"> ver mas</v-btn>
                        </Link>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <CorporateValues></CorporateValues>

        <section class="parallax-section">
            <v-parallax
                :src="bgParallax1"
                gradient="to top right, rgba(50,57,100,.5), rgba(12,16,36,.9)"
                height="400"
            >
                <v-container class="text-center py-10 fill-height">
                    <v-row justify="center">
                        <v-col cols="12">
                            <h2
                                class="text-h4 font-weight-bold text-white mb-4"
                            >
                                Construyamos Juntos con la Experiencia de
                                Nuestra Constructora
                            </h2>
                            <p class="text-body-1 text-white text-justify">
                                Ofrecemos soluciones integrales y sostenibles en
                                construcción, garantizando calidad, compromiso y
                                excelencia en cada proyecto que emprendemos. Nos
                                especializamos en brindar asesoramiento técnico
                                profesional, diseño arquitectónico innovador y
                                ejecución de obras civiles de alta calidad.
                                Nuestro enfoque está orientado hacia la
                                satisfacción de nuestros clientes, asegurando
                                que cada detalle sea cuidadosamente planificado
                                y ejecutado. Con un equipo altamente capacitado
                                y comprometido, trabajamos para superar las
                                expectativas y construir un futuro más sólido y
                                sostenible para todos.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-btn
                                class="text-capitalize"
                                color="primary"
                                outlined
                            >
                                Iniciar un Proyecto
                                <v-icon end>mdi-chevron-double-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-parallax>
        </section>

        <section class="bg-surface">
            <v-container class="text-center fill-height">
                <v-row>
                    <v-col cols="12">
                        <v-card class="text-primary" variant="outlined">
                            <v-card-title class="text-h5 font-weight-bold">
                                Quiénes Somos
                            </v-card-title>
                            <v-card-text
                            >Somos una empresa dedicada a la construcción
                                de obras civiles, infraestructura, diseño,
                                construcción y remodelación arquitectónica.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-card class="text-primary" variant="outlined">
                            <v-card-title class="text-h6 font-weight-bold">
                                Servicios Adicionales
                            </v-card-title>
                            <v-card-text>
                                Ofrecemos asesoría técnica y profesional en
                                áreas de la construcción e interventoría, entre
                                otros.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card class="text-primary" variant="outlined">
                            <v-card-title class="text-h6 font-weight-bold">
                                Nuestro Compromiso
                            </v-card-title>
                            <v-card-text>
                                Creamos obras con calidad superando las
                                expectativas de nuestros clientes.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card class="text-primary" variant="outlined">
                            <v-card-title class="text-h6 font-weight-bold">
                                Valores Agregados
                            </v-card-title>
                            <v-card-text>
                                Presentamos propuestas eficientes
                                económicamente, sostenibles y respetuosas con el
                                medio ambiente, con el objetivo de trascender en
                                el tiempo.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="mt-6" justify="center">
                    <v-col cols="auto">
                        <v-btn
                            class="text-capitalize"
                            color="primary"
                            data-aos="zoom-in"
                            outlined
                        >
                            Conoce Más
                            <v-icon end>mdi-chevron-double-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <TeamMembers/>

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

import img09 from "@images/img00009.jpg";
import img04 from "@images/img00004.jpg";
import bg1 from "@images/bg/bg-1.png"; // Usar notación @
import bg2 from "@images/bg/bg-2.png"; // Usar notación @
import bg3 from "@images/bg/bg-3.png"; // Usar notación @
import bg4 from "@images/bg/bg-4.png"; // Usar notación @
import bg5 from "@images/bg/bg-5.png"; // Usar notación @
import bgParallax1 from "@images/img00006.jpg"; // Usar notación @
import {useDisplay} from "vuetify";
import {Link} from "@inertiajs/vue3";
import CorporateValues from "@/Components/CorporateValues.vue";
import TeamMembers from "@/Components/TeamMembers.vue";

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

const slides = [
    {
        image: bg1,
        description:
            "Ofrecemos asesoramiento y supervisión profesional para proyectos industriales y de construcción, garantizando acuerdos efectivos y resultados excepcionales.",
        title: "Asesoramiento y Supervisión Experta",
        buttons: [
            {text: "Servicios", action: "verServicios()"},
            {text: "Contacto", action: "contactar()"},
        ],
    },
    {
        image: bg2,
        description:
            "Gestión integral de proyectos de construcción para garantizar precisión, calidad y cumplimiento en cada etapa del proceso.",
        title: "Gestión de Proyectos",
        buttons: [
            {text: "Soluciones", action: "explorarSoluciones()"},
            {text: "Información", action: "solicitarInformacion()"},
        ],
    },
    {
        image: bg3,
        description:
            "Aseguramos el éxito de sus proyectos mediante planificación estratégica y supervisión detallada en el sector construcción.",
        title: "Estrategia y Supervisión",
        buttons: [
            {text: "Más Info", action: "descubrirMas()"},
            {text: "Cotización", action: "obtenerCotizacion()"},
        ],
    },
    {
        image: bg4,
        description:
            "Proveemos soluciones innovadoras para proyectos industriales y de construcción, impulsando resultados confiables y sostenibles.",
        title: "Soluciones Innovadoras",
        buttons: [
            {text: "Servicios", action: "nuestrosServicios()"},
            {text: "Contacto", action: "contactar()"},
        ],
    },
    {
        image: bg5,
        description:
            "Ofrecemos experiencia técnica especializada para garantizar que sus proyectos cumplan con los más altos estándares.",
        title: "Expertos Técnicos",
        buttons: [
            {text: "Más Info", action: "conocerMas()"},
            {text: "Asesoría", action: "solicitarAsesoria()"},
        ],
    },
];

const infoCards = ref([
    {
        icon: "mdi-email-outline",
        title: "Dirección de correo",
        text: "contacto@constructoravillaiii.com",
        link: "mailto:contacto@constructoravillaiii.com",
        target: "_self",
        classes: [
            "border-custom-right",
            "border-custom-bottom border-custom-right",
            "",
        ],
    },
    {
        icon: "mdi-map-marker",
        title: "Ubicación",
        text: "Calle 85c 71-57 Barranquilla",
        link: "https://www.google.com/maps?q=Calle+85c+71-57+Barranquilla",
        target: "_blank",
        classes: [
            "border-custom-right",
            "border-custom-bottom",
            "border-custom-top",
        ],
    },
    {
        icon: "mdi-phone",
        title: "Teléfono",
        text: "304 583 5556",
        link: "tel:3045835556",
        target: "_self",
        classes: [
            "border-custom-right",
            "border-custom-right",
            "border-custom-top",
        ],
    },
    {
        icon: "mdi-clock",
        title: "Horario de oficina",
        text: "Lun a Vie: 8:00 AM - 5:00 PM",
        link: null,
        target: null,
        classes: ["", "", "border-custom-top"],
    },
]);

const services = ref([
    {
        icon: "mdi-domain",
        title: "Obras Civiles",
        description:
            "Especializados en la construcción de obras civiles e infraestructura de alta calidad.",
    },
    {
        icon: "mdi-pencil-ruler",
        title: "Diseño y Remodelación",
        description:
            "Ofrecemos diseño arquitectónico y remodelaciones innovadoras y sostenibles.",
    },
    {
        icon: "mdi-account-tie",
        title: "Asesoría Técnica",
        description:
            "Brindamos asesoría técnica y profesional en áreas de la construcción e interventoría.",
    },
    {
        icon: "mdi-leaf",
        title: "Sostenibilidad",
        description:
            "Comprometidos con propuestas sostenibles y amigables con el medio ambiente.",
    },
]);


const navigateTo = (path) => {
    router.push(path);
};
</script>

<style scoped>
@media screen and (max-width: 991px) {
    .business-culture .business-box {
        max-width: 115px;
        right: 0;
        top: 0;
    }
}

@media screen and (max-width: 767px) {
    .business-culture .business-box {
        max-width: 90px;
        right: 0;
        top: 0;
    }
}

.business-culture .business-box {
    max-width: 165px;
    right: -48px;
    top: 65px;
}

.position-absolute {
    position: absolute !important;
}

</style>
