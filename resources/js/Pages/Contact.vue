<template>
    <PageLayout title="Contacto">
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
                        Contáctanos
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        Ponte en contacto con nosotros a través de esta página.
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
                        ><br/>
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


                    <v-row>
                        <!-- Columna Izquierda -->
                        <v-col cols="12" md="5">
                            <!-- Dirección -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36">
                                        mdi-map-marker
                                    </v-icon>
                                </v-avatar>
                                <div class="ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 text-secondary"
                                    >
                                        Visítanos
                                    </h4>
                                    <div class="d-flex">
                                        <a class="font-weight-medium "
                                           href="https://www.google.com/maps?q=Calle+85c+71-57+Barranquilla">
                                            Calle 85c 71-57 local 6 Barranquilla
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <v-divider class="my-2" light></v-divider>

                            <!-- Teléfono -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36"
                                    >mdi-cellphone
                                    </v-icon
                                    >
                                </v-avatar>
                                <div class="ml-3">
                                    <h4
                                        class="text-left text-h6 mb-1 text-secondary"
                                    >
                                        Llámanos
                                    </h4>
                                    <div class="d-flex align-center">
                                        <a class="text-decoration-none" href="tel:+573116500061"
                                           target="_blank">
                                            <v-icon >mdi-phone</v-icon>
                                        </a>
                                        &nbsp;
                                        <a href="https://wa.me/573045835556" target="_blank">
                                            <v-icon >mdi-whatsapp</v-icon>
                                        </a>
                                        &nbsp;
                                        <a class="font-weight-medium"
                                           href="tel:+573045835556">
                                            304 583 5556
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <v-divider class="my-2" light></v-divider>

                            <!-- Correo -->
                            <div class="d-flex pt-2 mb-4">
                                <v-avatar color="grey lighten-2" size="72">
                                    <v-icon color="secondary" size="36"
                                    >mdi-email
                                    </v-icon
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
                                    allowfullscreen=""
                                    height="400"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.5930506480752!2d-74.8113006315847!3d11.017580486386185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da53700fb99%3A0x154f3495ffe26569!2sCl.%2085%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1745682794677!5m2!1ses-419!2sco"
                                    style="border: 0"
                                    width="100%"
                                ></iframe>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>

            <v-sheet class="py-md-15 py-8 px-5">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" md="4">
                            <v-card
                                class="hover-card fill-height"
                                data-aos="flip-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                elevation="4"
                            >
                                    <v-img
                                        :src="contact"
                                        alt="about2"
                                        class="rounded-lg zoom-in fill-height"
                                        cover
                                        height="100%"
                                    />
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
                                <v-container min-width="500" outlined>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                density="default"
                                                label="Nombre"
                                                variant="solo-filled"
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                density="default"
                                                label="Email"
                                                variant="solo-filled"
                                            />
                                        </v-col>
                                    </v-row>
                                    <v-text-field
                                        density="default"
                                        label="Asunto"
                                        variant="solo-filled"
                                    />
                                    <v-textarea
                                        density="default"
                                        label="Descripción del mensaje"
                                        rows="5"
                                        variant="solo-filled"
                                    />
                                    <div class="d-flex justify-center">
                                        <v-btn
                                            class="font-weight-bold"
                                            color="secondary"
                                            elevation="2"
                                            size="x-large"
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


        </section>
    </PageLayout>
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from "@images/header/bg-contact.jpg";
import contact from "@images/contact.jpg";
</script>
