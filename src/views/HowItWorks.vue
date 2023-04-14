<template>
  <div class="howitworks">  
  <SliderImage/>        
  <TabBar/>
  <OverView/>
  <PhotoGallery/>  
  <NearBy/> 
  </div>
</template>
<script>

const SliderImage = () => import(/* webpackChunkName: "slider-image" */ '@/components/SliderImage.vue');
const TabBar = () => import(/* webpackChunkName: "tab-bar" */ '@/components/TabBar.vue')
const OverView = () => import(/* webpackChunkName: "how-it-works" */ '@/components/OverView.vue')
const PhotoGallery = () => import(/* webpackChunkName: "photo-gallery" */ '@/components/PhotoGallery.vue')
const NearBy = () => import(/* webpackChunkName: "how-it-works" */ '@/components/NearBy.vue')

export default {
  components:{
    SliderImage,    
    TabBar,
    OverView,
    PhotoGallery,
    NearBy
  },
}
</script>
<style scoped>
</style>
