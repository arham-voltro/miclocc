<template>
    <v-container class="contact-form">
      <v-card class="pa-15">
        <v-row>
          <v-col cols="12" sm="12" md="6" class="">
            <div>
              <h1 class="display-1 font-weight-bold">Any questions?</h1>
              <p class="headline font-weight-light mt-5 black--text">
                Reach out to us if you have any inquiries about MICELOC, want to
                get started or learn more and we will get back to you.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="">
            <v-form>
              <v-row>
                <v-col col="6">
                  <v-text-field label="First Name" >
                  </v-text-field>
                </v-col>
                <v-col col="6">
                  <v-text-field label="First Name">

                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col col="6">
                  <v-text-field label="Email" >
                  </v-text-field>
                </v-col>
                <v-col col="6">
                  <v-text-field label="Phone" >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="Message" >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-btn class="white--text mx-2" color="#1f4643" absolute right>
                SUBMIT
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>

    </v-container>
</template>
<script>
export default {
}
</script>
<style>
.contact-form {
  position: relative;
  top: 140px;
  z-index: 9;
}
</style>