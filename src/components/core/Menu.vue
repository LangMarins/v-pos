<template>
  <v-navigation-drawer app absolute permanent>
    <router-link to="/" exact>
      <v-img src="@/assets/vue_display.jpg" alt="" width="100%" />
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          v-for="([icon, title, route], index) in menus"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["material-icons my_library_books", "About", "/about"],
      ],
    };
  },
};
</script>
