<script setup>
const table_headers = [
    {
        key: 'user',
        label: 'User',
        sortable: true,
    },
    {
        key: 'email',
        label: 'Email',
        sortable: true,
    },
    {
        key: 'role',
        label: 'Role',
        sortable: false,
    },
    {
        key: 'status',
        label: 'Status',
        sortable: true,
    },
    {
        key: 'plan',
        label: 'Plan',
        sortable: true,
    },
    {
        key: 'created_at',
        label: 'Created At',
        sortable: true,
    },
    {
        key: 'actions',
        label: 'Actions',
        sortable: false,
    },
];

</script>
<template>
    <div>
        <!-- Hoverable Table rows -->

        <div class="table-responsive text-nowrap">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" class="form-check-input">
                        </th>
                        <th v-for="header in table_headers" :key="header.key"> {{ header.label }}</th>

                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">

                    <tr>
                        <td>
                            <input type="checkbox" class="form-check-input">
                        </td>
                        <td>
                            <div class="d-flex justify-content-start align-items-center user-name">
                                <div class="avatar-wrapper">
                                    <div class="avatar avatar-sm me-3"><img :src="`/backend/assets/img/avatars/1.png`"
                                            alt="Avatar" class="rounded-circle"></div>
                                </div>
                                <div class="d-flex flex-column"><span class="name text-truncate h6 mb-0">Jordan
                                        Stevenson</span><small class="user_name text-truncate">@amiccoo</small></div>
                            </div>
                        </td>
                        <td>susanna.Lind57@gmail.com</td>
                        <td><span class="d-flex align-items-center gap-2 text-heading"><i
                                    class="ri-vip-crown-line ri-22px text-primary"></i>Admin</span></td>

                        <td><span class="badge rounded-pill bg-label-warning">Pending</span></td>
                        <td><span class="text-heading">Enterprise</span></td>
                        <td><span class="text-heading">10, July 2021 20:07
                            </span></td>
                        <td>
                            <a role="button">
                                <i class="ri-eye-line text-primary"></i>
                            </a>
                            |
                            <a role="button">
                                <i class="ri-pencil-fill text-primary"></i>
                            </a>

                            | <a role="button">
                                <i class="ri-delete-bin-fill text-danger"></i>
                            </a>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>

        <!--/ Hoverable Table rows -->
    </div>

</template>
