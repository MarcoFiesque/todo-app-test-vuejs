<template lang="fr">
    <div>
        <div class="container">
            <div class="row">
                <div class='col px-4' :class="{done: task.finished}">
                    
                    {{task.title}}

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