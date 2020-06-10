<template>
  <div class="alignComponents" v-bind:style="{alignItems:alignedItems, margin:marginProvided, flexDirection: direction, justifyContent: justify}">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
    name: 'AlignerComponent',
    props: {
        alignedItems: {
            type: String,
            require:true
        },
        padLeft: {
            type: String,
        },
        padRight: {
            type: String,
        },
        marginProvided: {
            type: String,   
        },
        direction: {
            type: String,
            require:true   
        },
        justify: {
            type: String,
            require:true        
        }
    },
    data(){ 
        return {
        }
    }
}
</script>

<style>
 .alignComponents { 
     display: flex;

 }
</style>