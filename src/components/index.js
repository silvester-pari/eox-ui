import Vue from "vue";
import EoxLogo from "./Logo.vue";
import EoxNavbar from "./Navbar.vue";
import EoxPageContent from "./PageContent.vue";
import EoxFooter from "./Footer.vue";

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