<template>
    <section class="py-md-12 py-5">
        <div class="py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2
                        :data-aos="mobile ? 'fade-up' : 'fade-right'"
                        class="text-h4 font-weight-bold text-dark text-primary mb-4"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light">Nuestro</span>
                        <br/>
                        <span
                            class="text-secondary ml-16 font-weight-bold font-weight-black"
                        >
                                Equipo
                            </span>
                    </h2>

                    <v-responsive
                        class="rounded-lg bg-primary mx-auto mb-4"
                        style="max-width: 100px"
                    >
                        <v-divider class="pb-1 rounded-lg" light/>
                    </v-responsive>
                    <p
                        class="text-body-1 text-muted"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Profesionales dedicados de Constructora Villa III
                        S.A.S
                    </p>
                </div>

                <v-container fluid>
                    <v-row align="center" class="d-flex  justify-between pa-4" justify="center">
                        <v-col
                            v-for="(member, index) in teamMembers"
                            :key="index"
                            class="pa-2"
                            cols="12"
                            lg="3"
                            md="4"
                            sm="6"
                        >
                            <TeamCard :member="member"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </div>
    </section>
</template>
<script setup>
import TeamCard from "@/Components/TeamCard.vue";


import joseVilla from "@images/avatar/jose-villa.png";
import yeimyVilla from "@images/avatar/yeimy-villa.png";
import yirleyVilla from "@images/avatar/yirley-villa.png";
import yulyVilla from "@images/avatar/yuly-villa.png";

import {ref} from "vue";
import {useDisplay} from "vuetify/framework";

const { mobile } = useDisplay();

const teamMembers = ref([
    {
        name: "Jose Luis Villa",
        designation: "Arquitecto Fundador",
        description:
            "Arquitecto constructor con 30 años de experiencia en el diseño y ejecución de proyectos residenciales y edificaciones institucionales. Dirección de equipos multidisciplinarios, con una gestión eficaz de los recursos y materiales. Resultados en las construcciones de manera sostenible, segura, con altos estándares de calidad y cumplimiento de plazos y presupuesto. Amplio conocimiento en la planeación y gestión de proyectos.",
        image: joseVilla,
    },
    {
        name: "Yeimy Villa López",
        designation: "Ingeniera Cofundadora",
        description:
            "Ingeniera Industrial, Magister en Supply Chain Management & Logistics, con más de 10 años de experiencia en el control de materiales, procesos administrativos y coordinación de procesos logísticos. Profesional orientada a resultados con alta competencia en la gestión de los procesos logísticos, garantizando el manejo óptimo de los recursos y su adecuada disponibilidad de acuerdo con las necesidades de los clientes.",
        image: yeimyVilla,
    },
    {
        name: "Yirley Villa",
        designation: "Finanzas y Contabilidad",
        description:
            "Especialista en finanzas y contabilidad con experiencia en la gestión de presupuestos, análisis financiero y cumplimiento de normativas contables. Responsable de garantizar la estabilidad financiera y la transparencia en los procesos económicos de la empresa.",
        image: yirleyVilla, // Reemplaza con la ruta de la imagen correspondiente
    },
    {
        name: "Yuly Villa",
        designation: "Departamento de Auditoría",
        description:
            "Auditoría interna con experiencia en la evaluación de procesos, control de riesgos y cumplimiento normativo. Encargada de asegurar la integridad y eficiencia de las operaciones mediante auditorías detalladas y recomendaciones estratégicas.",
        image: yulyVilla, // Reemplaza con la ruta de la imagen correspondiente
    },
]);

</script>
<style scoped>
@media screen and (max-width: 991px) {
}

@media screen and (max-width: 767px) {
}

</style>
