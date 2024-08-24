import { createRouter, createWebHistory } from "vue-router";

console.log('loca', window.location.href)
const getComponent = (file_name: string) => {
    return import(`./vue/backend/pages/${file_name}Component.vue`);
}

const per_fix = "/app";
const setRoute = (url: string, name: string, path: string, permission: string | null) => {
    return {
        path: per_fix+url,
        name: name,
        component: () => getComponent(path),
        meta: { permissions: permission ?? null },

    }
}

const routes = [
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    setRoute('/:catchAll(.*)', '404', 'error/404', null),
    setRoute('/unauthorized/user', '401', 'error/401', null),
    setRoute('/dashboard', 'dashboard', 'dashboard/Dashboard', null),
   


]
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;