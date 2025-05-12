<template>
    <div class="card-container pa-4" @mouseenter="flipped = true" @mouseleave="flipped = false">
        <div class="flip-wrapper" :class="{ flipped }">
            <!-- Parte frontal -->
            <v-card class="flip-face" elevation="6">
                <v-img
                    :src="member.image"
                    alt="Team Member Image"
                    width="100%"
                    height="80%"
                    cover
                ></v-img>
                <v-card-text class="text-center py-0">
                    <h3 class="team-name text-h6 font-weight-bold">{{ member.name }}</h3>
                    <div class="team-details text-subtitle-2 text-grey-darken-1">
                        <p>{{ member.designation }}</p>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Parte trasera -->
            <v-card  class="flip-face back" elevation="6">
                <v-card-text class="description-scroll">
                    <h3 class="text-h6 font-weight-bold">{{ member.name }}</h3>
                    <p class="text-subtitle-2">{{ member.designation }}</p>
                    <p class="text-body-2 mt-2">{{ member.description }}</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

defineProps({
    member: {
        type: Object,
        required: true,
    },
});

const flipped = ref(false);
</script>

<style scoped>
.card-container {
    width: 300px;
    height: 400px;
    perspective: 1200px; /* Mayor perspectiva para un efecto más natural */
}

.flip-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
}

.flip-wrapper.flipped {
    transform: rotateY(180deg);
}

.flip-face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.front {
    z-index: 2;
}

.back {
    transform: rotateY(180deg);
    z-index: 1;
    overflow-y: auto;
    padding: 16px;
}

.description-scroll {
    max-height: 100%;
    overflow-y: auto;
}
</style>
