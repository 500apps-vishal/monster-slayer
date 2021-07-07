
  var data={
      title:'the vuejs instance',  //outside data property
      page:false
  }
var vm1=new Vue({
    el:"#app",
    data: data,    //inside data property
    methods:{
        show:function(){
            this.page=true;
            this.updateTitle('  vuejs instance updated');
            

        },
        updateTitle:function(title){
            this.title=title;
        }
    },
    computed:{
        lowerCaseTitle:function(){
            return this.title.lowerCase();
        }
    },
    watch:{
        title:function(value){
            alert('title changed new value' + value);

        }
    }
});
console.log(vm1.$data===data);  //$ data property indicate outside data and inside data