<!--<template>
    <div >
       <slot></slot>     
        </div>
</template>
<script>
</script>
<style scoped>
div{
    border:1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding:10px;
    margin:1px;
    text-align: center;

}
p{
    background-color: bisque;
     font-size: 30px;
}
</style>-->
////////////////////
//using multiple slots
<template>
<div>
<div class="title">
    <slot name="title"></slot>
    <span style="color:#ccc"><slot name="subTitle"/>Not Bad</span>
</div>
<hr>
    <div>
       <slot></slot>     
        </div>
</div>
</template>
<script>
</script>
<style scoped>
div{
    border:1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding:10px;
    margin:1px;
    text-align: center;

}
p{
    background-color: bisque;
     font-size: 30px;
}
.title{
    font-style: italic;
}
</style>

