<template>
    <PageLayout title="Portafolio">
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
                        Portfolio
                    </h1>
                    <p class="text-h6 mb-6" style="max-width: 600px">
                        Check out our portfolio.
                    </p>
                </v-container>
            </v-img>
        </section>
    </PageLayout>
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bg from "@images/header/bg-portfolio.jpg";
</script>
