    <!-- <template>
    <div color="#ddd">
      
        <div class="d-flex">
          <h2 class="pt-2">Gallery</h2>
          <v-spacer></v-spacer>
          <div>
            <v-tabs show-arrows class="fixed-tabs-bar" background-color="#ddd">
              <v-tabs-slider color="black"></v-tabs-slider>
              <v-tab class="black--text" href="#tab-1">
                <h3>ALL</h3>
              </v-tab>
              <v-tab disabled class="black--text " href="#tab-2">
                <h3>ROOM</h3>
              </v-tab>
              <v-tab class="black--text " href="#tab-3">
                <h3>OUTSIDE</h3>
              </v-tab>
              <v-tab disabled class="black--text " href="#tab-1">
                <h3>RESTRAUANT</h3>
              </v-tab>
              <v-tab disabled class="black--text " href="#tab-2">
                <h3>SPACE</h3>
              </v-tab>
              <v-tab disabled class="black--text " href="#tab-3">
                <h3> OTHER </h3>
              </v-tab>
              <v-tab disabled class="black--text" href="#tab-3">
                <h3>NEARBY</h3>
              </v-tab>
            </v-tabs>
          </div>
        </div>
      <v-container id="photo-gallery" >

        <v-row class="mt-8">
          <v-col v-for="n in 14" :key="n" class="d-flex child-flex" cols="4">
            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1"
              class="grey lighten-2 border-img">
              <template v-slot:placeholder>
                <v-row>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>

    </div>
</template>
<script>
</script>
<style>
.border-img {
  border-radius: 20px;
}
.fixed-tabs-bar {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>  -->
<template>
  <div>
      <div style="background-color: #ddd;" color="#ddd" >
          <v-container>
              <v-row>
                  <v-col cols="6" md="6" sm="12">
                      <h2 class="display-1 font-weight-regular">Gallery</h2>

                  </v-col>
                  <v-col cols="6" md="6" sm="12">
                      <div>
                          <v-tabs class="" background-color="#ddd" left dark>

                              <v-tab class="black--text " href="#tab-1">
                                  ALL
                              </v-tab>
                              <v-tab disabled class="black--text " href="#tab-2">
                                  ROOM
                              </v-tab>
                              <v-tab class="black--text " href="#tab-3">
                                  OUTSIDE
                              </v-tab>
                              <v-tab disabled class="black--text " href="#tab-1">
                                  RESTAURANT
                              </v-tab>
                              <v-tab disabled class="black--text " href="#tab-2">
                                  SPACE
                              </v-tab>
                              <v-tab disabled class="black--text " href="#tab-3">
                                  OTHER
                              </v-tab>
                              <v-tab disabled class="black--text " href="#tab-3">
                                  NEARBY
                              </v-tab>
                          </v-tabs>
                      </div>
                  </v-col>
              </v-row>
              <!-- images -->
              <v-container id="photo-gallery">
              <div class="mt-8 " >
                  <v-row class="">
                      <v-col v-for="n in 14" :key="n" class="d-flex child-flex" cols="4">
                          <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1"
                              class="grey lighten-2 img-border">
                              <template v-slot:placeholder>
                                  <v-row class="fill-height ma-0" align="center" justify="center">
                                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-row>
                              </template>
                          </v-img>
                      </v-col>
                  </v-row>
              </div>
            </v-container>
          </v-container>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',

}
</script>

<style >
.img-border {
  border-radius: 20px;
}
</style>
