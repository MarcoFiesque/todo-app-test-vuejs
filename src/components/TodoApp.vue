<template lang="fr">
    <div class="container">
        <h1 class="text-center bg-secondary text-white p-3">
            Todo App
        </h1>
        <div class="row">
            <div class="col-lg-6">
                <Form />
            </div>
            <div class="col-lg-6">
                <Tasks-container />
            </div>
        </div>
    </div>
</template>
<script>
import TasksForm from './TasksForm.vue'
import TasksContainer from './TasksContainer.vue'
export default {
    components:{
        'Form': TasksForm,
        'Tasks-container': TasksContainer,
    },
    

}
</script>
<style lang="">
    
</style>