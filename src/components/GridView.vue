<template>
    <div>
    <p class="text-center headline">A <strong>new generation platform </strong>that includes <strong>world-vlass hotels
          and venues under one <br> roof.</strong> We facilitate group books and simplify event planning</p>
      <!-- <v-layout wrap>

        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-map-marker-outline </v-icon>
            </v-btn>
            <v-card-title primary-title>All venues in one platform
            </v-card-title>
            <v-card-text> MICELOC combines worldwide hotels and venues into a single platform to provide a
              hassle-free group booking and event planning experience
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-lightbulb-outline </v-icon>
            </v-btn>
            <v-card-title primary-title>Inspiration for your next event
            </v-card-title>
            <v-card-text> Get inspired by trending and seasonal cities, hotels, or venues to help you in finding
              what you’re looking for
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-notebook-check </v-icon>
            </v-btn>
            <v-card-title primary-title>Plan like a pro
            </v-card-title>
            <v-card-text> Constantly updated checklists help users create the perfect event experience and not
              forget any important details.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-wechat </v-icon>
            </v-btn>
            <v-card-title primary-title>Direct communication
            </v-card-title>
            <v-card-text> Users can directly communicate with hotels or venues through MICELOC, reducing the number
              of communication channels to keep track of.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-gift </v-icon>
            </v-btn>
            <v-card-title primary-title>Reward system
            </v-card-title>
            <v-card-text> Frequent MICELOC users will be rewarded with “nice MICE points” that can be redeemed as
              coupons for your next booking
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12 md4>
          <v-card max-width="360px" class="mt-5">
            <v-btn color="#c89857" fab elevation="none" class="ma-4" small>
              <v-icon color="white">mdi-magnify </v-icon>
            </v-btn>
            <v-card-title primary-title>Virtual search assistant
            </v-card-title>
            <v-card-text> MICELOC’s virtual search assistant is the right guide to assist you in finding the right
              hotel or venue seamlessly.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout> -->      
      <v-row>
        <div class="ma-auto" style="max-width: 90%">
          <v-row class="mt-15">
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-map-marker-outline </v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">All venues in one platform
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-lightbulb-outline</v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">Inspiration for your next event
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-notebook-check </v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">Plan like a pro
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-wechat</v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">Direct communication
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-gift</v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">Reward system
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" lg="4">
              <v-card class="px-5 py-3">
                <v-avatar class="mb-4" color="#c89857" size="56">
                  <v-icon color="white">mdi-magnify</v-icon>
                </v-avatar>
                <v-card-title class="pa-0 mb-4 text-left">Virtual search assistant
                </v-card-title>
                <v-card-text class="pa-0 text-left black--text">
                  MICELOC combines worldwide hotels and venues into a single
                  platform to provide a hassle-free group booking and event
                  planning experience
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </div>
</template>
<script>
export default {
    name: 'GridView'
}
</script>