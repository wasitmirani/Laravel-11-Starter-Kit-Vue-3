// vite.config.js
import { defineConfig } from "file:///G:/development/laravel/starterkit/node_modules/vite/dist/node/index.js";
import vue from "file:///G:/development/laravel/starterkit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import laravel from "file:///G:/development/laravel/starterkit/node_modules/laravel-vite-plugin/dist/index.js";
import dynamicImport from "file:///G:/development/laravel/starterkit/node_modules/vite-plugin-dynamic-import/dist/index.mjs";
var vite_config_default = defineConfig({
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, 'resources/ts/backend/Pages'), // Ensure path is correct
  //     },
  //   },
  plugins: [
    vue(),
    dynamicImport(),
    // Uncomment if using dynamic imports
    laravel({
      input: [
        "resources/css/app.css",
        "resources/ts/backend/app.ts",
        "resources/ts/frontend/app.ts"
      ],
      refresh: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxkZXZlbG9wbWVudFxcXFxsYXJhdmVsXFxcXHN0YXJ0ZXJraXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXGRldmVsb3BtZW50XFxcXGxhcmF2ZWxcXFxcc3RhcnRlcmtpdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovZGV2ZWxvcG1lbnQvbGFyYXZlbC9zdGFydGVya2l0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG4vLyBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJzsgLy8gSW1wb3J0IHBhdGggbW9kdWxlXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCBkeW5hbWljSW1wb3J0IGZyb20gJ3ZpdGUtcGx1Z2luLWR5bmFtaWMtaW1wb3J0JzsgLy8gVW5jb21tZW50IGlmIG5lZWRlZFxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuLy8gICByZXNvbHZlOiB7XG4vLyAgICAgYWxpYXM6IHtcbi8vICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3Jlc291cmNlcy90cy9iYWNrZW5kL1BhZ2VzJyksIC8vIEVuc3VyZSBwYXRoIGlzIGNvcnJlY3Rcbi8vICAgICB9LFxuLy8gICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHluYW1pY0ltcG9ydCgpLCAvLyBVbmNvbW1lbnQgaWYgdXNpbmcgZHluYW1pYyBpbXBvcnRzXG4gICAgbGFyYXZlbCh7XG4gICAgICBpbnB1dDogW1xuICAgICAgICAncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJyxcbiAgICAgICAgJ3Jlc291cmNlcy90cy9iYWNrZW5kL2FwcC50cycsXG4gICAgICAgICdyZXNvdXJjZXMvdHMvZnJvbnRlbmQvYXBwLnRzJyxcblxuICAgICAgXSxcbiAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlIsU0FBUyxvQkFBb0I7QUFFMVQsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBO0FBQUEsSUFDZCxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFFRjtBQUFBLE1BQ0EsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
