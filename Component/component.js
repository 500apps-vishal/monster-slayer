/*new Vue ({
    el:".app",
    data:{
        status: 'Task over'
    },
    template:'<p>Today Status:{{ status }}</p>'
})

*/


Vue.component('my-cmp',{   //vue is an object component is a method,my-cmp is an argument
    data: function(){
        return{
            status:'task pending'
        }
    },
        
    template:'<p>status:{{status}}</p>'    
});
new Vue ({
    el:"#app"
})