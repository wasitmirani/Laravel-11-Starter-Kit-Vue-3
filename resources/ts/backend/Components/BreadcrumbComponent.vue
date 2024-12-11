<script setup lang="ts">
const props = defineProps(['active_name', 'links'])

</script>
<template>
    <div class="row">
        <div class="col-12">
            <h4 class="py-3 mb-1">
                {{ props.active_name }}
            </h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-style1">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item" v-for="link in props.links" :key="link.id">
                        <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ props.active_name }}</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- <div>
            <nav>
                <ol className="breadcrumb mb-1">

                        <li  className="breadcrumb-item">

                                <a href='#'>Home</a>

                                <!-- item.label

                        </li>
                        <li  className="breadcrumb-item">

<a href='#'>Dashboard</a>



</li>

                    <li className="breadcrumb-item active" aria-current="page">current</li>
                </ol>
            </nav>
            <h1 className="page-title fw-medium fs-18 mb-0">current</h1>
        </div> -->
</template>

<!-- <style>
:root {
    --bs-secondary-color: rgba(33, 37, 41, 0.75);
    --text-muted: #6e829f;
}

.breadcrumb {
    --bs-breadcrumb-padding-x: 0;
    --bs-breadcrumb-padding-y: 0;
    --bs-breadcrumb-margin-bottom: 1rem;
    --bs-breadcrumb-bg: transparent;
    --bs-breadcrumb-border-radius: 0.25rem; /* Example default radius */
    --bs-breadcrumb-divider-color: var(--bs-secondary-color);
    --bs-breadcrumb-item-padding-x: 0.5rem;
    --bs-breadcrumb-item-active-color: var(--bs-secondary-color);

    display: flex;
    flex-wrap: wrap;
    padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
    margin-bottom: var(--bs-breadcrumb-margin-bottom);
    font-size: var(--bs-breadcrumb-font-size, 1rem); /* Added a fallback */
    list-style: none;
    background-color: var(--bs-breadcrumb-bg);
    border-radius: var(--bs-breadcrumb-border-radius);
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}
.breadcrumb-item+.breadcrumb-item::before {
    float: left;
    padding-right: var(--bs-breadcrumb-item-padding-x);
    color: var(--bs-breadcrumb-divider-color);
    content: var(--bs-breadcrumb-divider, "/");
}
.breadcrumb-item + .breadcrumb-item::before {
    color: var(--text-muted);
}
.page-header-breadcrumb .breadcrumb-item + .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "\ea1c");
    font-family: "tabler-icons" !important;
}

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
ol, ul {
    padding-left: 2rem;
}
ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}
.fs-18 {
    font-size: 1.125rem;
}
.fw-medium {
    font-weight: 500 !important;
}
.mb-0 {
    margin-bottom: 0 !important;
}
</style> -->
