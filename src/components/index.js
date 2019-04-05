import Vue from "vue";
import EoxAbCompare from "./EoxAbCompare.vue";
import EoxButton from "./EoxButton.vue";
import EoxFooter from "./EoxFooter.vue";
import EoxLogo from "./EoxLogo.vue";
import EoxMarkdown from "./EoxMarkdown.vue";
import EoxNavbar from "./EoxNavbar.vue";
import EoxPageContent from "./EoxPageContent.vue";
import EoxPageLayout from "./EoxPageLayout.vue";

const Components = {
    EoxAbCompare,
    EoxButton,
    EoxFooter,
    EoxLogo,
    EoxMarkdown,
    EoxNavbar,
    EoxPageContent,
    EoxPageLayout
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;