<template>
    <PageLayout title="Contacto">
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
                        Contact Us
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        Get in touch with us through this page.
                    </p>
                </v-container>
            </v-img>
        </section>

        <section>
            <v-sheet class="py-md-15 py-8" light>
                <v-container>
                    <div
                        class="text-h4 font-weight-bold text-dark text-primary aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <span class="font-weight-light"> MANTENTE EN </span
                        ><br />
                        <span
                            class="ml-16 text-secondary font-weight-bold font-weight-black"
                        >
                            CONTACTO CON NOSOTROS
                        </span>
                    </div>

                    <v-responsive
                        class="rounded-lg bg-primary mr-auto mb-6"
                        max-width="100px"
                    >
                        <v-divider class="pb-1 rounded-lg" light></v-divider>
                    </v-responsive>

                    <v-row justify="space-between">
                        <!-- Columna Izquierda -->
                        <v-col cols="12" md="5">
                            <!-- Dirección -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36"
                                        >mdi-map-marker</v-icon
                                    >
                                </v-avatar>
                                <div class="ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 text-secondary"
                                    >
                                        Visítanos
                                    </h4>
                                    <p
                                        class="text-body-1 grey--text text--darken-1 text-left mb-0"
                                    >
                                        Local 6 esquina, Cl. 16b #11-123.<br />Valledupar,
                                        Cesar
                                    </p>
                                </div>
                            </div>

                            <v-divider class="my-2" light></v-divider>

                            <!-- Teléfono -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36"
                                        >mdi-cellphone</v-icon
                                    >
                                </v-avatar>
                                <div class="ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 text-secondary"
                                    >
                                        Llámanos
                                    </h4>
                                    <a
                                        class="text-decoration-none"
                                        href="tel:+573116500061"
                                        >+57 311 650 0061</a
                                    >
                                </div>
                            </div>

                            <v-divider class="my-2" light></v-divider>

                            <!-- Correo -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36"
                                        >mdi-email</v-icon
                                    >
                                </v-avatar>
                                <div class="ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 text-secondary"
                                    >
                                        Escríbenos
                                    </h4>
                                    <a
                                        class="text-decoration-none"
                                        href="mailto:contacto@constructoravillaiii.com"
                                    >
                                        contacto@constructoravillaiii.com
                                    </a>
                                </div>
                            </div>
                        </v-col>

                        <!-- Columna Derecha - Mapa -->
                        <v-col cols="12" md="7">
                            <v-card class="map-responsive" elevation="2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.5930506480752!2d-74.8113006315847!3d11.017580486386185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da53700fb99%3A0x154f3495ffe26569!2sCl.%2085%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1745682794677!5m2!1ses-419!2sco"
                                    width="100%"
                                    height="400"
                                    style="border: 0"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>

            <v-sheet class="py-md-15 py-8">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-card
                                class="hover-card"
                                elevation="4"
                                data-aos="flip-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <a
                                    href="https://constructoravillaiii.com/"
                                    class="text-decoration-none"
                                >
                                    <v-img
                                        :src="contact"
                                        alt="about2"
                                        class="rounded-lg zoom-in"
                                        contain
                                        height="100%"
                                    />
                                </a>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="8">
                            <div
                                class="d-flex justify-center align-center flex-column"
                            >
                                <div>
                                    <h3
                                        class="text-h6 font-weight-bold mb-1 text-left"
                                    >
                                        ENVÍENOS SU MENSAJE
                                    </h3>
                                    <v-divider
                                        class="bg-primary pb-1 border-2 mx-auto mb-6"
                                        style="max-width: 28px"
                                    />
                                </div>
                            </div>

                            <v-form class="pa-5">
                                <v-container outlined min-width="500">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Nombre"
                                                variant="solo-filled"
                                                density="default"
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Email"
                                                variant="solo-filled"
                                                density="default"
                                            />
                                        </v-col>
                                    </v-row>
                                    <v-text-field
                                        label="Asunto"
                                        variant="solo-filled"
                                        density="default"
                                    />
                                    <v-textarea
                                        label="Descripción del mensaje"
                                        variant="solo-filled"
                                        density="default"
                                        rows="5"
                                    />
                                    <div class="d-flex justify-center">
                                        <v-btn
                                            color="secondary"
                                            size="x-large"
                                            elevation="2"
                                            class="font-weight-bold"
                                        >
                                            Enviar mensaje
                                        </v-btn>
                                    </div>
                                </v-container>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>

            <v-sheet class="bg-secondary py-md-15 py-sm-8 py-8">
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="12" md="3" class="pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <v-avatar
                                    class="v-avatar--density-default v-avatar--variant-flat secondary lighten-2"
                                    size="72"
                                    color="primary"
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
                                            local 6 esquina, Cl. 16b #11-123.
                                            Valledupar, Cesar
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="3" class="pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <v-avatar
                                    class="v-avatar--density-default v-avatar--variant-flat grey lighten-2"
                                    size="72"
                                    color="primary"
                                >
                                    <v-icon class="mdi-phone mdi" size="36" />
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
                                            href="tel:+57 012 3456789"
                                            class="text-decoration-none"
                                        >
                                            <h5
                                                class="font-weight-medium text-body-1 text-white"
                                            >
                                                +57 311 650 0061
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
                                    size="72"
                                    color="primary"
                                >
                                    <v-icon class="mdi-email mdi" size="36" />
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
                                                href="mailto:contacto@constructoravillaiii.com"
                                                class="text-decoration-none font-weight-medium text-body-1 text-white"
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
        </section>
    </PageLayout>
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from "@images/header/bg-contact.jpg";
import contact from "@images/contact.jpg";
</script>
