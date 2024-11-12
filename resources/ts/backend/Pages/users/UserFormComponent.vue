<script setup lang="ts">
import { Helpers } from '../../Utils/Helper';
import { useSettingsStore } from '../../Stores/settingsStore';
import { UserService } from '../../Services/user/UserService';



const settingsStore = useSettingsStore();
let userData = Helpers.useDynamicReactive({});
let errors = Helpers.useDynamicRef([]);
let countries = Helpers.useDynamicReactive([]);
const editmode = Helpers.useDynamicRef(false);
const isloading = Helpers.useDynamicRef(false);




const onInput = (phone:any, phoneObject:any, input:any)=> {
    if (phoneObject?.formatted) {
        userData.phone = phoneObject.formatted;
    }
}

const  addThumbnail = (media: any)=>{
  if (media) {
    userData.thumbnail = media.name;
  }

}

const userStore = (data: any) => {
  isloading.value = true;

  UserService.store(data)
    .then((res: any) => {

      Helpers.NotifyAlert(200, "User Store", "success", res.data.message);
      Helpers.router().push({ name: "users" });
    }).catch((err: any) => {
      if(err.response.data){
        errors.value = err.response.data;
        console.log(errors.value);
        Helpers.NotifyAlert(err.response.status, "", "error", err.response.data);
      }
    });
  setTimeout(() => {
    isloading.value = false;
  }, 1000);
};
const onSubmit = () => {

  if(!editmode.value){
    userStore(userData);
  }
  else {
    // userUpdate(user);
  }

};

Helpers.useDynamicOnMounted(async () => {
    await settingsStore.fetchCountries();
    await settingsStore.fetchTimezones();
    await settingsStore.fetchLanguages();
  console.log("countries",settingsStore.countries);
  console.log("languages",settingsStore.languages);
  console.log("timezones",settingsStore.timezones);
});

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
                <form method="POST" @submit.prevent="onSubmit"  class="fv-plugins-bootstrap5 fv-plugins-framework">
                    <div class="row mt-1 g-5">
                        <div class="col-md-6 fv-plugins-icon-container">
                            <DynamicInput
                            v-model="userData.first_name"
                            label="First Name"
                            name="first_name"
                            placeholder="John"
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
                        </div>
                        <div class="col-md-6 fv-plugins-icon-container">
                           
                            <DynamicInput
                            v-model="userData.last_name"
                            label="Last Name"
                            name="last_name"
                            placeholder="Doe"  
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
                        </div>
                        <div class="col-md-6">
                            <DynamicInput
                            v-model="userData.email"
                            label="Email"
                            name="email"
                            placeholder="Doe"  
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
                        </div>
                        <div class="col-md-6">
                            <DynamicInput 
                            v-model="userData.organization"
                            label="Organization"
                            name="organization"
                            placeholder="Organization"  
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
                        </div>
                        <div class="col-md-6">
                            <vue-tel-input :value="userData.phone" @input="onInput"></vue-tel-input>

                            <validate-input :errors="errors?.errors" :value="phone" />

                        </div>
                        <div class="col-md-6">
                           
                            <DynamicInput 
                            v-model="userData.address"
                            label="Address"
                            name="address"
                            placeholder="Address"  
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
                        </div>
                        <div class="col-md-6">
                            <DynamicInput 
                            v-model="userData.state"
                            label="State"
                            name="state"
                            placeholder="State"  
                            type="text"         
                            :errors="errors"
                            autofocus
                            />
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
                                <VueMultiselect v-model="userData.country"  placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="country">Country</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline">
                                <VueMultiselect v-model="userData.country"  placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="TagifyLanguageSuggestion">Language</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline form-floating-select2">
                                <VueMultiselect v-model="userData.country"  placeholder="Select Country"
                                    trackBy="id" label="name" :options="countries">
                                </VueMultiselect>
                                <label for="timeZones">Timezone</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating form-floating-outline form-floating-select2">
                                <VueMultiselect v-model="userData.country"  placeholder="Select Country"
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
