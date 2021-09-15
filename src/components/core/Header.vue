<template>
  <div>
    <v-app-bar app color="primary accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>JV-POS v {{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span>{{$store.getters["username"] | capitalize}}</span> <!-- cappitalize => Amin | uppercase => ADMIN -->
      <v-btn color="success" icon @click="onClickLogOff">
        <v-icon>material-icons logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    version() {
      return "0.1.0";
    },
  },
  methods: {
    onClickLogOff(){
      this.$store.dispatch('doLogout')
    }
  },
};
</script>

<style></style>
