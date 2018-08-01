var names = ['Ana','Sebastian','Diego'];
var x=0;
var urlo = ['off','nugget','bday'];
var posts = [];
new Vue({
  el: '#app',
  data: {
      info: '',
      scrolled: false,
      users: [
       {name: 'Ana', active: true},
       {name: 'Diego', active: false},
       {name: 'Sebastian', active: true}
      ],
      cont:1
  },
  methods: {
    fun: function (event) {
      for (var i = 10; i >= 0; i--) {
        posts=[];
        if(x==3) x=0;
        axios 
        .get('http://foaas.com/'+urlo[3-x]+'/'+names[x]+'/Everyone?shoutcloud')
        .then(response => (posts.push(JSON.stringify(response.data.message))));
        x++;
      };
      this.info=posts;
    }
  },
  created() {
    setInterval(this.fun,1000);
  }
  
  
})