<template>
    <div class="container">
        <div class="row">
            <div class = "col-x5-12">
              <button @click="selectedComponent='favorate Food'">Done</button>
            <button  @click="selectedComponent='favorate dress'">Preview</button>
            <button  @click="selectedComponent='Ur Choice plz'">Next</button>
            <hr>
            <p>  {{selectedComponent}}</p>
           <component :is="selectedComponent">
             <p>No content</p>
             </component> 
            </div>
            
            
              <!--<app-Quote>-->
                
               <!-- <h1 slot="title">{{title}}</h1> -->
               <!--<p>Cool</p>-->
              <!--  </app-Quote>-->
              </div>
    </div>
</template>
<script>

import quote from './components/quote.vue';
import autho from './components/autho.vue';
import neww from './components/neww.vue';


export default {
  data:function(){
    return{
      title: 'Hello World',
      selectedComponent:'page'
    }
  },
    component:{
      appQuote: quote,
      appneww:neww,
      appautho:autho
    }
}
</script>
