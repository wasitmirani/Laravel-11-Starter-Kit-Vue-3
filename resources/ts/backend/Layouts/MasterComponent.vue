<script lang="ts" setup>
import FooterComponent from "./partials/FooterComponent.vue";
import HeadComponent from "./partials/HeadComponent.vue";
import SideBarMenuComponent from "./partials/SideBarMenuComponent.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Determine the direction of the transition based on route changes
const route = useRoute();
const transitionName = computed(() => {
  return route.name === 'home' ? 'slide-right' : 'slide-left';
});
</script>
<template>
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <SideBarMenuComponent />
      <!-- / Menu -->
      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->
        <HeadComponent />
        <!-- / Navbar -->
        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="flex-grow-1 container-p-y container-fluid">
            <router-view v-slot="{ Component }">
                <Transition  name="slide-fade">
                  <component :is="Component" />
                </Transition>
              </router-view>
          </div>
          <!-- / Content -->
          <!-- Footer -->
          <FooterComponent />
          <!-- / Footer -->
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
  <!-- / Layout wrapper -->
</template>

<style>
.slide-fade-enter-active {
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
}

.slide-fade-leave-active {
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(16px);
    opacity: 0;
}
</style>