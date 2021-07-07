Vue.component('testcomponent',{   //To create a component, you can register it globally with the component method of the Vue constructor.
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
    data: function() {
       return {
          name : "Ria"
       }
    },
    methods:{
       changename : function() {
          this.name = "Ben";
       },
       originalname: function() {
          this.name = "Ria";
       }
    }
 });
 var vm = new Vue({          //the name as a tag name in your HTML to render the component1.
    el: '#component_test'
 });
 var vm1 = new Vue({
    el: '#component_test1'
 });