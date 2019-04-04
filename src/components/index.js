import Vue from "vue";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import PageContent from "./PageContent.vue";
import Footer from "./Footer.vue";

const Components = {
    Logo,
    Navbar,
    PageContent,
    Footer
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;