<template lang="fr">
    <div class="container">
        <Task :task="task"/>
        <!-- {{$route.params}}
        {{task.title}} -->
    </div>
</template>
<script>
import Task from './Task.vue';

export default {
    // props: ['id', 'task'],
    components:{
        Task
    },
    data(){
        return{
            id: this.$route.params.id,
            tasks: [],
        }
    },
    mounted() {
        this.tasks = this.$store.getters.getTasks
        // console.log(this.tasks);
        console.log("Taches : ", this.tasks);
        console.log("Une Tache : ", this.getTask);
    },
    computed: {
        getTasks(){
            return this.$store.getters.getTasks[this.id];
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    
    beforeCreate() { 
        this.$store.commit('SET_CURRENT_TASK', this.id);
    },

}
</script>
<style lang="">
    
</style>