import Vue from "vue";
import EoxLogo from "./EoxLogo.vue";
import EoxButton from "./EoxButton.vue";
import EoxMarkdown from "./EoxMarkdown.vue";
import EoxNavbar from "./EoxNavbar.vue";
import EoxPageContent from "./EoxPageContent.vue";
import EoxPageLayout from "./EoxPageLayout.vue";
import EoxFooter from "./EoxFooter.vue";

const Components = {
    EoxLogo,
    EoxButton,
    EoxMarkdown,
    EoxNavbar,
    EoxPageContent,
    EoxPageLayout,
    EoxFooter
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;