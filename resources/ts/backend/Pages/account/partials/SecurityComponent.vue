<template>
    <div>
        <!-- Change Password -->
        <div class="card mb-6">
            <h5 class="card-header">Change Password</h5>
            <div class="card-body pt-1">
                <form id="formAccountSettings" method="GET" onsubmit="return false"
                    class="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                    <div class="row">
                        <div class="mb-5 col-md-6 form-password-toggle fv-plugins-icon-container">
                            <div class="input-group input-group-merge">
                                <div class="form-floating form-floating-outline">
                                    <input class="form-control" type="password" name="currentPassword"
                                        id="currentPassword" placeholder="············">
                                    <label for="currentPassword">Current Password</label>
                                </div>
                                <span class="input-group-text cursor-pointer"><i class="ri-eye-off-line"></i></span>
                            </div>
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                    </div>
                    <div class="row g-5 mb-6">
                        <div class="col-md-6 form-password-toggle fv-plugins-icon-container">
                            <div class="input-group input-group-merge">
                                <div class="form-floating form-floating-outline">
                                    <input class="form-control" type="password" id="newPassword" name="newPassword"
                                        placeholder="············">
                                    <label for="newPassword">New Password</label>
                                </div>
                                <span class="input-group-text cursor-pointer"><i class="ri-eye-off-line"></i></span>
                            </div>
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                        <div class="col-md-6 form-password-toggle fv-plugins-icon-container">
                            <div class="input-group input-group-merge">
                                <div class="form-floating form-floating-outline">
                                    <input class="form-control" type="password" name="confirmPassword"
                                        id="confirmPassword" placeholder="············">
                                    <label for="confirmPassword">Confirm New Password</label>
                                </div>
                                <span class="input-group-text cursor-pointer"><i class="ri-eye-off-line"></i></span>
                            </div>
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                    </div>
                    <h6 class="text-body">Password Requirements:</h6>
                    <ul class="ps-4 mb-0">
                        <li class="mb-4">Minimum 8 characters long - the more, the better</li>
                        <li class="mb-4">At least one lowercase character</li>
                        <li>At least one number, symbol, or whitespace character</li>
                    </ul>
                    <div class="mt-6">
                        <button type="submit" class="btn btn-primary me-3 waves-effect waves-light">Save
                            changes</button>
                        <button type="reset" class="btn btn-outline-secondary waves-effect">Reset</button>
                    </div>
                    <input type="hidden">
                </form>
            </div>
        </div>
        <!-- End change Password -->
    </div>
</template>

<script lang="ts" setup>
console.log("hello world2");
</script>

<style></style>
