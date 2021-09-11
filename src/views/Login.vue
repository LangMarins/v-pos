<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img src="@/assets/vuejs-wallpapers.jpg" height="200px" />
        <v-card-text>
          <v-form>
            <!-- Username -->
            <v-text-field name="name" label="Username" id="username" />
            <!-- Password -->
            <v-text-field name="password" label="Password" id="password" />

            <!-- Buttons -->
            <v-row class="justify-space-between px3">
              <v-btn text>Register</v-btn>
              <v-btn color="success">Login</v-btn>
            </v-row>
            
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
