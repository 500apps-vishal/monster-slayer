new Vue({                      
    el: '#app',
    data: {
      title: 'hello World',
      vueLink: 'https://www.w3schools.com/',  //adding the data using dynamic attribute
      finished:'<a href="https://www.google.co.in/ ">Google</a>'
      },
      methods:{
        sayHello: function(){
          this.title = 'Welcome to'
          return this.title;           //accessing the data in vue instance using this keyword
        }                                   //display output hello world
      }
    });