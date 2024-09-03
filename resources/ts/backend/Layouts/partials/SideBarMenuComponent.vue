<script lang="ts" setup>
import { Helpers } from "../../Utils/helpers";
import Sidebar from "../../Utils/sidebar";

const menuList: any = Helpers.useDynamicRef([]);

Helpers.useDynamicOnMounted(() => {
  let sidebar = new Sidebar();
  const fetchedMenuList = sidebar.getMenuList();
  menuList.value = fetchedMenuList;
  console.log("menuList", menuList.value);
});
function isActive(link: string) {
  console.log("isActive", Helpers.route().path == link);
  console.log("link", link);
  return Helpers.route().path === link ? 'active' : '';

}
function isAllowed(value: string): boolean {
  console.log("isAllowed", value);
  return true;
  // if (permissions.includes(value)) {
  //     return true;
  // } else {
  //     return false;
  // }
}
const getMenuClass = (type: string) => {
  switch (type) {
    case "heading":
      return "menu-header fw-medium mt-4";
      break;
    default:
      return "menu-item";
      break;
  }
}
</script>

<template>
  <div>
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
      <div class="app-brand demo ">
        <a href="index.html" class="app-brand-link">
          <span class="app-brand-logo demo">
            <span style="color:var(--bs-primary);">
              <!-- Logo -->
            </span>
          </span>
          <span class="app-brand-text demo menu-text fw-semibold ms-2">Materialize</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z"
              fill-opacity="0.9"></path>
            <path
              d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z"
              fill-opacity="0.4"></path>
          </svg>
        </a>
      </div>

      <div class="menu-inner-shadow"></div>
      <ul class="menu-inner py-1">

        <li :class="getMenuClass(item.type)" v-for="item in menuList" v-if="menuList.length > 0">
          <span class="menu-header-text" v-if="item.type == 'heading'" :data-i18n="item.title">{{ item.title }}</span>
          <router-link :to="item.link" v-if="item.type == 'single' && isAllowed(item.can)"
            :class="`menu-link ${isActive(item.link)}`">
            <i :class="`menu-icon tf-icons  ${item.icon}`"></i>
            <div :data-i18n="item.title">{{ item.title }}</div>
          </router-link>
          <a href="javascript:void(0);" v-if="item.type == 'multi' && isAllowed(item.can)"
            class="menu-link menu-toggle">
            <i :class="`menu-icon tf-icons  ${item.icon}`"></i>
            <div :data-i18n="item.title">{{ item.title }}</div>
            <!-- <div class="badge bg-primary rounded-pill ms-auto">5</div> -->
          </a>
          <ul class="menu-sub" v-if="item.type == 'multi' && isAllowed(item.can)">
            <!-- active -->
            <li :class="`menu-item  ${isActive(submenu.link)}`" v-for="submenu in item.sub_menu">
              <router-link :to="submenu.link" class="menu-link">
                <div :data-i18n="submenu.title"> {{ submenu.title }}</div>
              </router-link>
            </li>
          </ul>
        </li>

      </ul>
    </aside>
  </div>
</template>

<style lang="">

</style>