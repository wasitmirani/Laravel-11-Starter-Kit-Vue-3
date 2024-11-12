import { createApp } from "vue";

// import './registerServiceWorker'
import { createPinia } from 'pinia'
import App from "./App.vue";

import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css';




import BreadcrumbComponent from "./Components/BreadcrumbComponent.vue";

// const BreadcrumbComponent = () => import(`${component_path}/BreadcrumbComponent.vue`);
import SearchInput from "./Components/SearchInputComponent.vue";
import DynamicInput from "./Components/DynamicInputComponent.vue";
import LoadingBox from "./Components/LoadingBoxComponent.vue";
import Avatar from "./Components/AvatarComponent.vue";
import ValidateInput from "./Components/ValidateInputComponent.vue";
// import GenericInput from "./Components/GenericInputComponent.vue";
import Uploader from 'vue-media-upload';
import { useGlobal } from './global-composables'; // Import the composable
import VueMultiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css"
import router from "./router";

const pinia = createPinia()
const app = createApp(App);
  let permissions = JSON.parse(`${localStorage.getItem('permissions')}`);
  app.directive("can", {
    beforeMount(el, binding, vnode) {
      if (permissions.includes(binding.value)) {
        return vnode.el.hidden = false;
      }
      else {
        return vnode.el.hidden = true;
      }
    }
  });
app.use(pinia);
app.use(router);
// app.provide('useGlobal', useGlobal); // Provide the composable
app.component('BreadcrumbComponent',BreadcrumbComponent);
app.component('Uploader', Uploader);
app.component('SearchInput',SearchInput);
app.component('DynamicInput', DynamicInput);
app.component('LoadingBox',LoadingBox);
app.component('validate-input',ValidateInput);
// app.component('generic-input',GenericInput);
app.component('VueMultiselect',VueMultiselect);
app.component('Avatar',Avatar);
app.config.globalProperties.$router = router;
app.use(VueTelInput);

app.mount('#app');




