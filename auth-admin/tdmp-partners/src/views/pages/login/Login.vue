<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">

            <div align="center"><h4>"Welcome to TC Dashboard"<br></h4></div>
            <div>
            </div>
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" width="90%">
              <div>
              <div align="center">Any welcome promotion text here</div>
              </div>
              <div align="left"></div>
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back merchants & partners, <br>Please login to your existing account.</p>
                </div>

                <vs-tabs>
                  <vs-tab label="SIGN-IN">
                    <login-jwt></login-jwt>
                  </vs-tab>
                </vs-tabs>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from "./LoginJWT.vue"
import LoginFirebase from "./LoginFirebase.vue"
import LoginAuth0 from "./LoginAuth0.vue"

export default {
  components: {
    LoginJwt,
    LoginFirebase,
    LoginAuth0
  }
}
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
