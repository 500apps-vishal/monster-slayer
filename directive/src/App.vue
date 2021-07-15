<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md--offset-3">
          <h1>Directives</h1>
          <p v-text="'All the best'"></p>
          <p v-html="'<strong>Congrats</strong>'"></p>
          </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md--offset-3">
          <h1>Subject</h1>  
          <p v-highlight:background.delayed.another="'green'">Party</p>
          <p v-local-highlight:background.delayed.blink="'blue'">celebrations</p>
        </div>
      </div>
     </div>
  </template>
            
            <script>
            
                export default{

                }
          
            </script>
            