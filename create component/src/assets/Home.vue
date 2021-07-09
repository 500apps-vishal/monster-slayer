<template>
    <div>
<h1> Status:{{status}}</h1>
<button v-on:click='changeStatus()'> Change Status</button>
    </div>
</template>


<script>
   export default{
     data:function(){
       return{
           status:'Update'
       }
     },
       methods:{
           changeStatus(){
           this.status='Delete';
           }
     }
 }
</script>