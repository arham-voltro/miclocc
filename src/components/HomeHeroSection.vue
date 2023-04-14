<template>
    <v-img src="@/components/assets/hero-img.jpeg" class="width" alt="">
      <div>
        <div class="mx-auto mt-12 ">
          <p class="text-center white--text font-weight-light">
            <span class="font-weight-black">M</span>EETINGS
            <span class="font-weight-black">I</span>NCENTIVES
            <span class="font-weight-black">C</span>ONVENTIONS
            <span class="font-weight-black">E</span>VENTS
          </p>
          <div class="headline">
            <h1 class="text-center white--text ">Hotel & Venues <span class="font-weight-light">under one roof</span>
            </h1>
          </div>
        </div>
        <div class="mt-16">
          <v-tabs centered slider-color="white" background-color="transparent">
            <v-tab class="headline white--text">ALL</v-tab>
            <v-tab class=" headline white--text">HOTELS</v-tab>
            <v-tab class="headline white--text">VENUES</v-tab>
          </v-tabs>
        </div>
        <div class="mt-10 mx-15 ">
          <v-text-field solo label="Search for hotel,venue,city or country" prepend-inner-icon="mdi-magnify"
            color="black" class=""></v-text-field>
        </div>
      </div>
    </v-img>
</template>