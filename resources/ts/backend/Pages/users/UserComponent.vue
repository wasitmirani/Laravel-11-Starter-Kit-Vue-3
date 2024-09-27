<template>
    <div>
        <div class="row g-6 mb-6">
            <h4 class="mb-1">Users List</h4>
            <p class="mb-6">A role provided access to predefined menus and features so that depending on assigned role
                an administrator can have access to what user needs.</p>
        </div>

        <!-- Users List Table -->
<div class="card">
  <div class="card-header border-bottom">
    <h5 class="card-title mb-0">Filters</h5>
    <div class="d-flex justify-content-between align-items-center row gx-5 pt-4 gap-5 gap-md-0">
      <div class="col-md-4 user_role"></div>
      <div class="col-md-4 user_plan"></div>
      <div class="col-md-4 user_status"></div>
    </div>
  </div>
  <div class="card-datatable table-responsive">
    <table class="datatables-users table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>User</th>
          <th>Email</th>
          <th>Role</th>
          <th>Plan</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
  </div>
  </div>
    </div>

</template>

<style lang="">

</style>
