<template>
  <div class="home">
    <HomeHeroSection />
    <v-container>
      <GridView />
      <!--  -->
      <v-row class="mt-12">
        <v-col cols="12" sm="12" md="6" class="mt-10">
          <img src="@/components/assets/explore.jpeg" width="100%" height="100%" alt="hola">
        </v-col>
        <v-col cols="12" md="6" class="d-flex px-4 align-center">
          <div>
            <h1>Seemless search experience</h1>
            <p>
              The most time-consuming part of a group trip is the long search
              for suitable hotels and venues, as well as the gathering of
              important information for the booking. MICELOC reduces this
              time-consuming work by up to 80%, because it provides users
              directly with the appropriate information and combinations and
              puts them in touch with the right contact person for direct and
              smooth communication.
            </p>
          </div>
        </v-col>
      </v-row>
      <!-- Hotel and Venue starts -->
      <v-row class="mt-12">
        <v-col cols="12" md="6" class="d-flex align-center px-4">
          <div>
            <h1>Hotel and Venue Details</h1>
            <p>
              Almost no platform and even the hotels themselves provide the
              information suitable for group events, clear, detailed and edited.
              Often relevant data and also pictures are missing to get a perfect
              overview. MICELOC starts right there and delivers everything you
              need to plan a perfect stay and a smooth event experience -
              without a long inquiry process, directly after entering your
              search criteria.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" class="mt-10">
          <img src="@/components/assets/hotel.jpeg" width="100%" height="100%" alt="hola">
        </v-col>
      </v-row>
      <!-- Pool house starts -->
      <v-row class="mt-12">
        <v-col cols="12" sm="12" md="6" class="mt-10">
          <img src="@/components/assets/home.png" width="100%" height="100%" alt="hola">
        </v-col>
        <v-col cols="12" md="6" class="d-flex px-4 align-center">
          <div>
            <h1 class="font-weight-light display-1">We aim to become the <span class="font-weight-bold">ultimate,
                contemporary search engine for hotels and venues</span> across the globe.</h1>

            <p class="font-weight-light mt-2">
              Changing times have transformed the event planning landscape.
              Nowadays, people are searching for ways to save time and money.
              Digital innovation, coupled with a user-friendly approach that
              encourages direct contact, is the answer.
            </p>
            <p class="font-weight-light">
              For perfect digital solutions and contemporary event planning,
              partner with our team of:
            </p>
            <ul class="font-weight-light ">
              <li>
                IT experts with a diversified tech-portfolio built over the past
                13 years
              </li>
              <li>
                Marketing gurus showcasing a modern perspective of an
                ever-changing digital space
              </li>
              <li>
                Event specialists with over 14 years of experience in MICE
                industry and tourism
              </li>
            </ul>
            <v-btn class="font-weight-bold mt-5" color="#1f4643" outlined>
              CONTACT US
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- Contact form starts -->
    <ContactForm/>
    <!-- Footer starts -->
    <FooterSection/>
  </div>
</template>
<script>
import HomeHeroSection from '@/components/HomeHeroSection.vue'
import GridView from '@/components/GridView.vue'
import ContactForm from '@/components/ContactForm.vue'
import FooterSection from '@/components/FooterSection.vue'
export default {
  name: 'HomeView',
  components: {
    HomeHeroSection,
    GridView,
    ContactForm,
    FooterSection
  }, 
}
</script>
<style>
</style>