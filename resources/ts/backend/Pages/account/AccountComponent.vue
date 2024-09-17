
<script setup lang="ts">
const TabButtonComponent = Helpers.useDynamicDefineAsyncComponent(() => import('../../Components/TabButtonComponent.vue'));
import { Helpers } from "../../Utils/helpers";



const auth_user = Helpers.auth();
const tabs_list = Helpers.useDynamicRef([
    {name:'account',icon:'ri-user-settings-line',label:'Account',class:'active'},
    {name:'security',icon:'ri-lock-line',label:'Security',class:""},
    {name:'billing',icon:'ri-lock-line',label:'Billing & Plans',class:''},
]);


</script>


<template>
    <div>
        <!-- <BreadcrumbComponent :active_name="auth_user.name" /> -->
        <div class="col-xl-6">
            <!-- <h6 class="text-muted">Filled Pills</h6> -->
            <div class="nav-align-top mb-6">
              <ul class="nav nav-pills mb-4 nav-fill" role="tablist">
                <li class="nav-item mb-1 mb-sm-0" role="presentation" v-for="item in tabs_list" :key="item.id">
                    <TabButtonComponent :name="item.name" :customclass="item.class" :icon="item.icon" :label="item.label"/>
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

function refactive(arg0: { name: string; icon: string; label: string; customclass: string; }[]) {
  throw new Error("Function not implemented.");
}

function refactive(arg0: { name: string; icon: string; label: string; customclass: string; }[]) {
  throw new Error("Function not implemented.");
}
