<template>
  <div>
    <v-app-bar color="white" app clipped-left :style="'z-index:999'">
      <v-container class="d-flex align-center">      
        <v-btn small color="white" elevation="0" v-if="$vuetify.breakpoint.smAndDown" >
          <v-icon @click="drawer = true">
            mdi-menu
          </v-icon>
        </v-btn>
        <div class="d-flex mx-auto align-center">
          <v-img src="@/components/assets/miceloc-logo.svg"></v-img>
        </div>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        <div  class="align-center d-flex" v-if="$vuetify.breakpoint.mdAndUp">
          <div class="pointer mx-2" v-for="(menu, index) in menus" :key="index" :to="menu.name">
            <div @click="navigate(menu.name)">{{ menu.title }}</div>
          </div>
        </div>
        <div class="d-none d-sm-flex">
          <v-btn v-for="(button, index) in signupbutton" :key="index" :to="button.name"
           class="white--text mx-2  " color="#1f4643">
            {{ button.title }}
          </v-btn>
          <v-btn v-for="(button, index) in loginbutton" :key="index" :to="button.name" class=" mx-2" color="#1f4643" outlined>
            {{ button.title }}
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <!-- Mobile navigation -->
    <v-navigation-drawer v-model="drawer" temporary class=" my-14" width="100%" color="#1f4643" app clipped>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.name" class="white--text">
            <v-list-item-title >{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <div>
          <v-btn v-for="(button, index) in signupbutton" :key="index" :to="button.name" class=" mx-2" color="white">
            {{ button.title }}
          </v-btn>
          <v-btn class=" mx-2" color="white" outlined>
            LOGIN
          </v-btn>
          <div class="text--white">
          </div>
        </div>
      </v-list>
      <v-btn class="" color="#1f4643" elevation="none" top right absolute x-small @click="drawer = false">
        <v-icon class="" color="white">mdi-close</v-icon>
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>
  
<script>

export default {
  name: 'NavBar',
  components: {
  },
  data: () => ({
    drawer: false,
    group: false,
    menus: [   
      { title: 'HOME',name:'home' },
      { title: 'HOW IT WORKS', name:'how-it-works' },
      { title: 'BECOME A PARTNER', name:'become-a-partner' },
      { title: 'ABOUT US', name:'about-us' },
    ],
    signupbutton:[
      {title:'SIGN UP', name:'sign-up'},
    ],
    loginbutton:[
      {title:'LOGIN', name:'log-in'}
    ]
  }),
  methods: {
    navigate(name){     
      if (this.$route.name !== name) {
        this.$router.push({name : name});
      }
    }
  }
};
</script>
<style scoped>
.pointer{
  cursor: pointer;
}
</style>
