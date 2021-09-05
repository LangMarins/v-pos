import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#43A047',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b91c1c',
                info: '#ffff00'
            },
        },
    },
});
