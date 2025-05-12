import { defineStore } from 'pinia';

export const useRoutesStore = defineStore('routes', {
    state: () => ({
        routes: [
            { path: 'home', name: 'Inicio', icon: 'mdi-home' },
            { path: 'about', name: 'Nosotros', icon: 'mdi-information' },
            { path: 'services', name: 'Servicios', icon: 'mdi-briefcase' },
            { path: 'process', name: 'Proceso', icon: 'mdi-cogs' },
            { path: 'portfolio', name: 'Portafolio', icon: 'mdi-folder' },
            { path: 'contact', name: 'Contacto', icon: 'mdi-phone' },
        ],
    }),
});
