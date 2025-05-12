// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

//icons
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// Importar la fuente Poppins
import "../fonts/poppins.css";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#0056A3', //Azul claro (opcional)
                    secondary: '#001c32',// Azul oscuro del logo 
                    accent: '#b9b9b9e0', // Gris claro del texto
                    background: '#FFFFFF', // Fondo blanco
                    surface: '#F5F5F5', // Fondo claro para superficies
                    error: '#FF5252', // Rojo
                    info: '#2196F3', // Azul
                    success: '#4CAF50', // Verde
                    warning: '#FFC107', // Amarillo
                },
            },
            dark: {
                colors: {
                    primary: '#272727',
                    secondary: '#9e9e9e',
                    accent: '#212121',
                    error: '#f44336',
                    warning: '#ff9800',
                    info: '#1e88e5',
                    success: '#4caf50',
                }
            },

        },
    },
    defaults: {
        global: {
            font: {
                family: 'Poppins', // Configurar Poppins como fuente global
            },
        },
    },
});

export default vuetify;







