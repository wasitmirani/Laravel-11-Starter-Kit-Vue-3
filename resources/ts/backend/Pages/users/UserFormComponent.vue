<script setup lang="ts">
import { Helpers } from '../../Utils/helpers';
import { reactive, computed } from 'vue';



let userData = Helpers.useDynamicReactive({
    country: {},
});
let countries = Helpers.useDynamicReactive([]);
const onSumbit = () => {
    console.log("userData", userData);
}
const onInput = (phone:any, phoneObject:any, input:any)=> {
    if (phoneObject?.formatted) {
        userData.phone = phoneObject.formatted;
    }
}

const  addThumbnail = (media: any)=>{
  if (media) {
    user.thumbnail = media.name;
  }


}

</script>

<template>
    <div>
        <div class="card mb-6">
            <!-- Account -->
            <div class="card-body">
                <div class="d-flex align-items-start align-items-sm-center gap-6">
                    <img class="d-block w-px-120 h-px-120 rounded" :src="userData.thumbnail" alt="User image"
                        v-if="editmode">
                    <!-- d-block w-px-100 h-px-100 rounded-4 -->
                    <Uploader server="/upload/user/image" max="1" maxFilesize="2" :warnings="true"
                        @add="addThumbnail" />
                    <div class="button-wrapper">

                        <div class="small">Allowed JPG, GIF or PNG. Max size of 4MB</div>
                    </div>

                </div>
            </div>
            <div class="card-body pt-0">
                <form method="POST" onsubmit="return false" class="fv-plugins-bootstrap5 fv-plugins-framework">
                    <div class="row mt-1 g-5">
                        <div class="col-md-6 fv-plugins-icon-container">
                            <div class="form-floating form-floating-outline">
                                <input class="form-control" v-model="userData.first_name" type="text" id="firstName"
                                    name="firstName" placeholder="John" autofocus="">
                                <label for="firstName">First Name</label>
                            </div>
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                        <div class="col-md-6 fv-plugins-icon-container">
                            <div class="form-floating form-floating-outline">
                                <input class="form-control" type="text" v-model="userData.last_name" name="lastName"
                                    placeholder="Doe" id="lastName">
                                <label for="lastName">Last Name</label>
                            </div>
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <input class="form-control" type="text" id="email" v-model="userData.email" name="email"
                                    placeholder="john.doe@example.com">
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <input type="text" class="form-control" id="organization" name="organization"
                                    placeholder="organization">
                                <label for="organization">Organization</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <vue-tel-input :value="userData.phone" @input="onInput"></vue-tel-input>



                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <input type="text" class="form-control" id="address" name="address"
                                    placeholder="123 Main St, New York, NY 10001">
                                <label for="address">Address</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <input class="form-control" type="text" id="state" name="state" placeholder="New York">
                                <label for="state">State</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <input type="text" class="form-control" id="zipCode" name="zipCode" placeholder="648391"
                                    maxlength="8">
                                <label for="zipCode">Zip Code</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline form-floating-select2">
                                <!-- @select="getCategory(car.brand)" -->
                                <VueMultiselect v-model="userData.country" required placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="country">Country</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <VueMultiselect v-model="userData.country" required placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="TagifyLanguageSuggestion">Language</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline form-floating-select2">
                                <VueMultiselect v-model="userData.country" required placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="timeZones">Timezone</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline form-floating-select2">
                                <VueMultiselect v-model="userData.country" required placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="currency">Currency</label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <button type="submit" @click="onSumbit"
                            class="btn btn-primary me-3 waves-effect waves-light">Save changes</button>
                        <button type="reset" class="btn btn-outline-secondary waves-effect">Reset</button>
                    </div>
                    <input type="hidden">
                </form>
            </div>
            <!-- /Account -->
        </div>
    </div>
</template>

<style>

</style>
