
<script setup lang="ts">

const auth_user = window?.user;
import TabButtonComponent from  "../../Components/TabButtonComponent.vue";
</script>


<template>
    <div>
        <!-- <BreadcrumbComponent :active_name="auth_user.name" /> -->
        <div class="col-xl-6">
            <!-- <h6 class="text-muted">Filled Pills</h6> -->
            <div class="nav-align-top mb-6">
              <ul class="nav nav-pills mb-4 nav-fill" role="tablist">
                <li class="nav-item mb-1 mb-sm-0" role="presentation">
                  <!-- <button type="button" class="nav-link waves-effect waves-light active" role="tab" data-bs-toggle="tab"
                  data-bs-target="#navs-pills-justified-home"
                  aria-controls="navs-pills-justified-home"
                  aria-selected="true">
                  <i class="tf-icons ri-user-settings-line me-2"></i>
                   Account
                  <!-- <span class="badge rounded-pill badge-center h-px-20 w-px-20 bg-danger ms-2 pt-50">{{auth_user?.name}}</span>
                </button> -->
                <TabButtonComponent name="account" customclass="active2" label="Account"/>

                </li>
                <li class="nav-item mb-1 mb-sm-0" role="presentation">
                  <button type="button" class="nav-link waves-effect waves-light" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-profile" aria-controls="navs-pills-justified-profile" aria-selected="false" tabindex="-1"><i class="tf-icons ri-user-3-line me-2"></i> Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button type="button" class="nav-link waves-effect waves-light" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-messages" aria-controls="navs-pills-justified-messages" aria-selected="false" tabindex="-1"><i class="tf-icons ri-message-2-line me-2"></i> Messages</button>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="navs-pills-justified-home" role="tabpanel">
                  <p>
                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder. Bear
                    claw
                    candy topping.
                  </p>
                  <p class="mb-0">
                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly-o
                    jelly-o ice
                    cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet.
                  </p>
                </div>
                <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                  <p>
                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream. Gummies
                    halvah
                    tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake.
                  </p>
                  <p class="mb-0">
                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton candy
                    liquorice caramels.
                  </p>
                </div>
                <div class="tab-pane fade" id="navs-pills-justified-messages" role="tabpanel">
                  <p>
                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies cupcake gummi
                    bears
                    cake chocolate.
                  </p>
                  <p class="mb-0">
                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet roll icing
                    sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly jelly-o tart brownie
                    jelly.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>

</template>

<style>

</style>
