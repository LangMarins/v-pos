<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img class="black--text align-end" src="@/assets/vuejs-wallpapers.jpg" height="200px">
          <v-card-title primary-title>
            V-POS Register
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field name="name" label="Username" id="username" v-model="account.username" :rules="usernameRule"/>
            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              v-model="account.password"
              :rules="passwordRule"
            />
              <span>{{account}}</span>
            <!-- Buttons -->
            <v-row class="justify-space-between px3">
              <v-btn text @click.prevent="$router.back()">Cancel</v-btn>
              <v-btn type="submit" color="success">Confirm</v-btn>
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
      account:{
        username:"",
        password:""
      },
      usernameRule:[v1=>!!v1 || "Username is required",],
      passwordRule:[v1=>!!v1 || "Password is required", v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number"]
    };
  },
  methods: {
    submit(){
      alert(JSON.stringify(this.account))
    }
  },
};
</script>

<style></style>
