<script lang="ts" setup>
import HeadComponent from './partials/HeadComponent.vue';
import SideBarMenuComponent from './partials/SideBarMenuComponent.vue';
</script>
<template >
  
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar  ">
    <div class="layout-container">
      <!-- Menu -->
      <SideBarMenuComponent/>
      <!-- / Menu -->



      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <HeadComponent/>

        <!-- / Navbar -->



        <!-- Content wrapper -->
        <div class="content-wrapper">

          <!-- Content -->

          <div class="flex-grow-1 container-p-y container-fluid">


            <RouterView />
           

          </div>
          <!-- / Content -->




          <!-- Footer -->
          <!-- Footer -->
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

