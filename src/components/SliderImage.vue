<template>
  <div>
    <v-carousel height="90vh" width="100vw" v-if="$vuetify.breakpoint.mdAndUp">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <div v-else>
      <v-img height="50%" src="@/components/assets/hero-img.jpeg">
        <div class="d-flex ma-3">
          <v-btn x-small fab color="white mt-1">
            <v-icon color="grey">
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <div> <v-icon class="mx-2" color="white ">
              mdi-file-pdf-box
            </v-icon>
            <v-icon color="white ">
              mdi-share-variant
            </v-icon>
          </div>
        </div>
      </v-img>
    </div>
    <div class="card-position" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="">
        <div class="d-flex">
          <v-btn x-small fab color="white mb-2">
            <v-icon color="grey">
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <h4 class="px-2 mt-1 white--text">Back To List</h4>
        </div>
      </div>
      <v-card class=" px-4" max-width="650" height="400" outlined ripple>
        <v-list-item>
          <v-list-item-content>
            <div class="text-overline d-flex">
              <p>HOTEL.BUSINESS.CITY</p>
              <div>
                <v-rating v-model="rating" small background-color="black" color="yellow"></v-rating>
              </div>
              <v-spacer></v-spacer>
              <div class="">
                <v-icon>
                  mdi-file-pdf-box
                </v-icon>
                <v-icon>
                  mdi-bookmark-outline
                </v-icon>
                <v-icon>
                  mdi-share-variant
                </v-icon>
              </div>
            </div>
            <v-list-item-title class="display-1 mt-0 mb-5">
              Premier Inn Lübeck City Stadtgraben
            </v-list-item-title>
            <div class="d-flex justify-space-between">
              <h3 class="grey--text">LOCATIONS</h3>
              <div class="text-h6 font-weight-bold">SHOW ON MAP</div>
            </div>
            <div class="text-h6 font-weight-regular ">
              Moislinger Allee 9, Luebeck, Germany
            </div>
            <div class="mt-4">
              <v-row class="grey--text font-weight-bold" no-gutters>
                <v-col cols="4">
                  <p>GUEST ROOMS</p>
                </v-col>
                <v-col cols="4">
                  <p>MEETING SPACES</p>
                </v-col>
                <v-col cols="4">
                  <p>PARKING SPACES</p>
                </v-col>
              </v-row>
              <v-row class="font-weight-bold mb-4" no-gutters>
                <v-col cols="4">
                  <h3>0</h3>
                </v-col>
                <v-col cols="4">
                  <h3>0</h3>
                </v-col>
                <v-col cols="4">
                  <h3>0</h3>
                </v-col>
              </v-row>
              <v-row class="grey--text font-weight-bold" no-gutters>
                <v-col cols="4">
                  <p>EVENT SPACES</p>
                </v-col>
                <v-col cols="4">
                  <p>RECEPTION</p>
                </v-col>
              </v-row>
              <v-row class="black--text font-weight-bold" no-gutters>
                <v-col cols="4">
                  <h3>0</h3>
                </v-col>
                <v-col cols="4">
                  <h4>AVALIABLE</h4>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-btn disabled right absolute>EXPRESS REQUEST</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <v-container v-else>
      <div class="text-overline font-weight-bold py-4 px-0" :class="{ 'd-flex': $vuetify.breakpoint.smOnly }">
        <div>HOTEL.BUSINESS.CITY</div>
        <v-rating v-model="rating" small background-color="black" color="yellow">
        </v-rating>
      </div>
      <v-row class=" font-weight-bold " :class="{ 'd-flex': $vuetify.breakpoint.smOnly }">
        <v-col cols="12" sm="6" class="px-4 ">
          <div class="">Premier Inn Lübeck City Stadtgraben</div>
        </v-col>
        <v-col cols="12" sm="6" class="px-4 py-0">
          <div class=" text--secondary text-body-1">Moislinger Allee 9, Luebeck, Germany</div>
        </v-col>
      </v-row>
      <v-row class=" font-weight-bold ">
        <v-col class="px-4">
          <div class=" text--secondary text-body-1">Guest Rooms</div>
          <div class="d-flex ">
            <v-icon color="grey">
              mdi-bed
            </v-icon>
            <div class="mx-2">30</div>
          </div>
          <div class=" mt-4 text--secondary text-body-1">Largest Room</div>
          <div class="d-flex">
            <v-icon>
              mdi-floor-plan
            </v-icon>
            <div class="mx-2">13,9993 sq.ft.</div>
          </div>
        </v-col>
        <v-col class="px-0">
          <div class=" text--secondary text-body-1">Meeting Rooms</div>
          <div class="d-flex ">
            <v-icon>
              mdi-table-chair
            </v-icon>
            <div class="mx-2">1,658</div>
          </div>
          <div class=" mt-4 text--secondary text-body-1">Total Meeting Space</div>
          <div class="d-flex ">
            <v-icon>
              mdi-gamepad-down
            </v-icon>
            <div class="mx-2">900 sq.ft.</div>
          </div>
        </v-col>
      </v-row>
      <v-btn class="mt-5 " width="100%" disabled>EXPRESS REQUEST</v-btn>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'SliderImage',
  data() {
    return {
      rating: 4,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },

  mounted() {
    console.log("Detail Mounted");
    this.rating = 5;
  },
  watch: {
    rating: function (value) {
      console.log("rating value", value);
      if (value === 3) {
        this.rating = 5;
      }
    }
  },
  methods: {

  },
  computed: {

  },
  filter: {},
  destroyed() {
    console.log("destroyed");
  },

}
</script>

<style>
.card-position {
  position: absolute;
  top: 70px;
  left: 185px
}
</style> 
