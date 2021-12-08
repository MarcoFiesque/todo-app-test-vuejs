<template lang="fr">
    <div class="mt-5">
        <form @submit="addTask($event)">
            <label for="title">Tâche</label>
            <div class="form-group">
            <input type="text"
                class="form-control" 
                name="title" 
                id="taskTitle" 
                aria-describedby="helpId" 
                placeholder=""
                v-model="title"
            >
            <div class="form-group">
                <label for="description">Description</label>
                <textarea 
                    class="form-control" 
                    name="description" 
                    id="taskDescription" 
                    rows="3"
                    v-model="description"
                >
                </textarea>
            </div>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input 
                        type="checkbox" 
                        class="form-check-input" 
                        name="state" 
                        id="taskState" 
                        value="checkedValue"
                        v-model="finished"
                    />
                    Effectuée
                </label>
            </div>
            <Button class="btn" >Ajouter tâche</Button>
        </form>

    </div>
</template>
<script>
import TasksForm from './TasksForm.vue'
import Button from './Button.vue'
export default {
    components:{
        TasksForm,
        Button
    },
    data() {
        return {
            
            id: 0,
            title: '',
            description: '',
            finished: false,
        }
    },
    computed: {
        buildTask : function(){
        return{
                // id: this.$store.state.tasks.length,
                id: this.$store.state.tasks.length,
                title: this.title,
                description: this.description,
                finished: this.finished
            }

        }
    },
    methods: {
        addTask(e){
            e.preventDefault();
            if(this.title.length>0){
                
                // console.log(this.$store.state);
                //let t = this.buildTask;
                // this.$store.dispatch('add_task', this.buildTask);
                this.$store.commit('ADD_TASK', this.buildTask);

            }
        }
    },
     beforeUnmount(){
        this.$store.commit('SAVE_TASKS_LOCAL_STORAGE', this.$store.state.tasks);
    }
}
</script>
<style lang="">
    
</style>