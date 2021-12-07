<template lang="fr">
    <div class="bg-secondary p-2 tasks my-2 my-lg-5 ">
        <h2 class="text-center">Liste des tâches enregistrées</h2>
        <div v-for="task in getTasks">
            <div :key="task.id" class="row align-middle">
                <div class='col'>
                    <router-link :to="{name: 'detail',params: {id: task.id}}" >
                        <Task :task="task" :tasks="getTasks"/>
                    </router-link>
                </div>
                <div class='col-auto state_checkbox pr-5'>
                    <div class="form-check">
                        <label class="form-check-label mr-5">
                            Terminée
                        </label>
                        <input type="checkbox" class="form-check-input" name="" id="" :value="task.value" v-model="task.finished" @change="toggleTaskState($event)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Task from './Task.vue'

export default {
    computed: {
        getTasks(){
            return this.$store.getters.getTasks;
        }
    },
    name: 'TaskContainer',
    // props: ['id'],
    data() {
        return {
            
        }
    },
    components:{
        Task,
    },
    created() {
    },
    methods: {
        toggleTaskState(e){
            // console.log('toggle func');
            console.log(e.target.value);
        }
    },
    beforeCreate() { 
        console.log("Bef create")    
        this.$store.commit('initialiseStore', this.getTasks)
    },

}
</script>
<style >
    a{
        text-decoration: none; 
        color: white;
    }
   
    .tasks{
        min-height: 50vh;
        color: white;
    }

    .state_checkbox{
        position: 'absolute'
    }
</style>