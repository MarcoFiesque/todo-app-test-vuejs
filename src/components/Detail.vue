<template lang="fr">
    <div class="container">
        <TaskDetails :task="task"/>
        <!-- {{$route.params}
        {{task.title}} -->
        <!-- {{task}} -->
    </div>
</template>
<script>
    import TaskDetails from './TaskDetails.vue'


export default {
    // props: ['id', 'task'],
    components:{
        TaskDetails

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
        this.$store.commit('SET_CURRENT_TASK', this.id);
        console.log("Une Tache : ", this.getTask);

    },
    computed: {
        task(){
            return this.$store.state.currentTask;
            // return this.$store.getters.getTasks[this.id];
        },
    },
    created() {
        this.id = this.$route.params.id;
    },
    
    beforeCreate() { 
        this.$store.commit('SET_CURRENT_TASK', this.id);
    },
    beforeUnmount(){
        this.$store.commit('SAVE_TASKS_LOCAL_STORAGE', this.task)
    }

}
</script>
<style lang="">
    
</style>