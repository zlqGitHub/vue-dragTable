<template>
    <div>
        <input type="text" v-model="value">
        <input type="text" v-model="data.value2">

    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: 'watchComponent',
        data() {
            return {
                value: 1,
                data: {
                    value2: 10,
                }
            }
        },
        watch: {
            value: function(newV, oldV) {
                if(newV != oldV){
                    alert("value改变了")
                }
            },
            // 'data.value2': function(newV, oldV) {
            //     if(newV != oldV){
            //         alert("data.value2改变了")
            //     }
            // } 
            'data.value2': {
                handler: function(newV, oldV) {
                    if(newV != oldV){
                        alert("data.value2改变了")
                    }
                },
                deep: true,
            } 
        }
    }
</script>