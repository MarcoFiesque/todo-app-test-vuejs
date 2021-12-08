<template lang="fr">
    <div>
        <div class="container">
            <div class="card p-3 bg-secondary text-white">

                <div class="row mb-3">
                    <div class='col px-4' >
                        
                        <div class="form-group">
                          <label >Tâche :</label>
                          <input type="text"
                            class="form-control" v-model="task.title">
                        </div>
                        
                    </div>
                </div>
                <div class="row mb-3">
                    <div class='col px-4' >
                        <div class="form-group">
                            <label >Description :</label>
                            <input type="text"
                              class="form-control" v-model="task.description">
                          </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <label class="form-check-label mr-5">
                            {{task.finished ? 'Terminée' : 'En cours' }}
                        </label>
                        <input type="checkbox" class="form-check-input" name="" id="" :value="task.value" v-model="task.finished" @change="toggleTaskState($event)">
                    </div>
                </div>
                <div class="row mb-2">
                    <div class='col px-4 ' >

                        <router-link to="/" class="w-100 btn btn-primary">
                            Valider
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['task'],
    data() {
        return {
        
        }
    },
    mounted() {
        // console.log('that task', this.getCurrentTask);
        // this.$store.commit('SET_CURRENT_TASK', this.id)
        // console.log(this.$store.state.currentTask);
    },
    computed:{
        getCurrentTask(){
            return this.task;
        }
    },
    methods: {
        printTask(){
            console.log();
        }
    },
}
</script>
<style >
    .done {
        text-decoration: line-through;
    }
</style>