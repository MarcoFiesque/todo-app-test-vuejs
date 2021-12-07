<template lang="fr">
    <!-- <button :class="type" class="btn"> -->
    <component :is='type' :href="href" class="btn mt-4" :class="color">
        <slot/>
    </component>
    <!-- </button> -->
</template>
<script>
export default {
    props: {
        href:{
            type: String,
            default: null
        },
        color:{
            String,
            default: "btn-secondary"
        }
    },
    computed: {
        type(){
            if(this.href){
                return 'a';
            } else {
                return 'button'
            }
        }
    },
}
</script>
<style lang="">
    
</style>