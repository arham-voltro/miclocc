<template>
    
  <div class="mt-12 " >
    <v-container id="near-by">
      <h2 class="py-5">Nearby</h2>
      <v-row >
        <v-col  v-for="item in items" :key="item.id"  cols="12" sm="4" >
          <v-card class="image-border" width="250"  hover >
            <v-img  width="250" height="150" :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
            <v-card-text >
              <div class="font-weight-bold ">{{ item.name }}</div>
              <p class="headline black--text font-weight-bold mt-3 mb-10">{{ item.title }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
name: "nearBy",
data() {
  return {
    items: [
      {
        id: 1,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        name: 'POOL • 26.7km ',
        title: 'Arborea Marina '
      },
      {
        id: 2,
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        name: 'Arham',
        title: 'Intern'
      },
      {
        id: 3,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        name: 'Ali Haider',
        title: 'Intern'
      },
      {
        id: 4,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        name: 'Shoaib Bhai',
        title: 'Sr.Developer'
      },
      {
        id: 5,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        name: 'Mehboob Bhai',
        title: 'Sr.Developer'
      }
    ]
  };
}
};
</script>
<style scoped >
.image-border {
  border-radius: 20px;  
}

</style>