var names = ['Ana','Sebastian','Diego'];
var x=0;
var urlo = ['off','nugget','bday'];
new Vue({
  el: '#app',
  data: {
      info: '',
      users: [
       {name: 'Ana', active: true},
       {name: 'Diego', active: false},
       {name: 'Sebastian', active: true}
      ],
      cont:1
  },
  methods: {
    getdata: function (event) {
      if(x==3) x=0;
      axios 
      .get('http://foaas.com/'+urlo[3-x]+'/'+names[x]+'/Everyone?shoutcloud')
      .then(response => (this.info = JSON.stringify(response.data.message)));
      x++;
    }
  }
})