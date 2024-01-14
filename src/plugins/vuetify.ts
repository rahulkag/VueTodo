import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files


import colors from 'vuetify/util/colors'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    // theme: {
    //     // defaultTheme: "light",
    //     light: {
    //         dark: false,
    //         colors: {
    //             primary: colors.red.darken1, // #E53935
    //             secondary: colors.red.lighten4, // #FFCDD2
    //         }
    //     },
    // },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.teal.darken3,
                    secondary: colors.teal.lighten5,

                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                }
            },
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
});
export default vuetify;
/*
export default createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2
                }
            },
        },
    },
})
*/