<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img class="black--text align-end" src="@/assets/vuejs-wallpapers.jpg" height="200px">
          <v-card-title primary-title>
            V-POS
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-form>
            <!-- Username -->
            <v-text-field name="name" label="Username" id="username" />
            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
            />

            <!-- Buttons -->
            <v-row class="justify-space-between px3">
              <v-btn text @click.prevent="$router.push('/register')">Register</v-btn>
              <v-btn @click="$store.state.isLogged = !$store.state.isLogged" color="success">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false,
    };
  },
};
</script>

<style></style>
