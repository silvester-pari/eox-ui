import Vue from "vue";
import EoxLogo from "./EoxLogo.vue";
import EoxNavbar from "./EoxNavbar.vue";
import EoxPageContent from "./EoxPageContent.vue";
import EoxFooter from "./EoxFooter.vue";

const Components = {
    EoxLogo,
    EoxNavbar,
    EoxPageContent,
    EoxFooter
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;