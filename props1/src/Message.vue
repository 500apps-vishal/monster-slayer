<template>
    <div>
        <center><h1>{{ message }}</h1>
        <app-input :msg="message" @messageChanged="message = $event"></app-input></center>
    </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        data() {
          return {
              message: '500apps!'
          }
        },
        components: {
            'app-input': Input
        }
    }
</script>
<style scoped>
h1 {
    font-display: auto;
    font-style:normal;
    font-size: 3rem;
    background-color: aquamarine;
    color: red;
}
</style>