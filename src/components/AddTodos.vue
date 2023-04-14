<template>
    <div>
        <div>
        <h3 class="d-flex justify-center mb-5 mt-5">Add Todo</h3>
        <div>
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo" required />
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit(event) {
            event.preventDefault();
            this.addTodo(this.title);
            this.title = '';
        }
    }
}
</script>
<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 10px solid #41b883;
    cursor: pointer;
}
</style>