<template>
  <v-card class="fixed-tabbar">
    <v-container>
      <v-tabs class="fixed-tabs-bar" background-color="white" left dark>
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab class="black--text  text-uppercase" @click="handleScroll('overview')">
          <div>overview</div>
        </v-tab>
        <v-tab class="black--text " @click="handleScroll('photo-gallery')">
          <div>photo gallery</div>
        </v-tab>
        <v-tab class="black--text " @click="handleScroll('near-by')">
          <div>nearby</div>
        </v-tab>
      </v-tabs>
    </v-container>
  </v-card>

</template>
<script>
export default {
  name: 'TabBar',
  methods: {
    handleScroll(id) {
      console.log("scroll", id)
      this.$vuetify.goTo("#" + id, { offset: 50 });
    }
  }
}
</script>
<style>
.fixed-tabbar {
  position: sticky;
  top: 50px;
  z-index: 2;
}
</style> 
