<template>
  <div>
    <AddTodos />
    <FilterTodos />
    <TodosList />
  </div>
</template>
<script>
import TodosList from '@/components/TodosList.vue'
import FilterTodos from '@/components/FilterTodos.vue'
import AddTodos from '@/components/AddTodos.vue'
export default {
  name: 'BecomeAPartner',
  components: {
    FilterTodos,
    AddTodos,
    TodosList,
   

  },
}

</script>
<style>

</style>