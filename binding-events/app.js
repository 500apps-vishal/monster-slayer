
 /* new Vue({
    el: '#app',
    data: {
      title: 'hello World'
      },
      methods:{
        sayHello: function(){
          return 'hello';              //display ouput hello
        }
      }
  });*/
  

  new Vue({                      
    el: '#app',
    data: {
      title: 'hello World'  
      },
      methods:{
        sayHello: function(){
          return this.title;                //accessing the data in vue instance using this keyword
        }                                   //display output hello world
      }
    });