<template>
    <div>
        <v-container>
            <v-card width="100%"  class="">
            <form @submit.prevent="submit" class="px-10 mt-10" >
                
                <v-text-field v-model="email"  label="E-mail" required></v-text-field>

                <v-text-field v-model="password" :counter="7" label="Password"
                    required></v-text-field>
                <v-btn class="mr-4 mb-5" type="submit" >
                    submit
                </v-btn>
            </form>
        </v-card>
        </v-container>        
    </div>
</template>
<script>
export default {
    components: {
    },
    data: () => ({       
        email: '',
        password: '',
    }),
    methods: {
        submit() {
            this.$refs.observer.validate()
        },
    },
}
</script>
<style>
</style>