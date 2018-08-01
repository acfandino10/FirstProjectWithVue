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
       {name: 'Sebastian', active: tru<html>
       <head>
       <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Permanent+Marker|Kirang+Haerang|Poiret+One" rel="stylesheet">
       <link rel="stylesheet" href="styleprin.css">
       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
       <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   </head>
   <body>
       <img id="circle" src="imgs/anaca.png" class="centrado">
       <div id="app" class="notepaseswei"> 
           <strong v-on:click="greet" v-show="cont==1" class ="grande">
               {{info[0]}}
           </strong>
           <i v-show="cont==2" v-on:click="greet" class ="mediano">
               {{info[0]}}
           </i>
           <i v-show="cont==3" v-on:click="greet" class ="peque">
               {{info[1]}}
           </i>
          <strong v-show="cont==0" v-on:click="greet" class ="grande">
               {{info[2]}}
           </strong>
           <strong v-on:click="greet" v-show="cont==1" class ="grande">
               {{info[3]}}
           </strong>
           <i v-show="cont==3" v-on:click="greet" class ="mediano">
               {{info[4]}}
           </i>
           <i v-show="cont==2" v-on:click="greet" class ="peque">
               {{info[5]}}
           </i>
          <strong v-show="cont==1" v-on:click="greet" class ="grande">
               {{info[6]}}
           </strong>
           <strong v-on:click="greet" v-show="cont==0" class ="grande">
               {{info[7]}}
           </strong>
           <i v-show="cont==0" v-on:click="greet" class ="mediano">
               {{info[8]}}
           </i>
           <i v-show="cont==2" v-on:click="greet" class ="peque">
               {{info[9]}}
           </i>
          <strong v-show="cont==3" v-on:click="greet" class ="grande">
               {{info[10]}}
           </strong>
           <strong v-on:click="greet" v-show="cont==1" class ="grande">
               {{info[11]}}
           </strong>
           <i v-show="cont==3" v-on:click="greet" class ="mediano">
               {{info[12]}}
           </i>
           <i v-show="cont==1" v-on:click="greet" class ="peque">
               {{info[13]}}
           </i>
           <strong v-on:click="greet" v-show="cont==0" class ="grande">
               {{info[14]}}
           </strong>
           <i v-show="cont==3" v-on:click="greet" class ="mediano">
               {{info[15]}}
           </i>
           <i v-show="cont==2" v-on:click="greet" class ="peque">
               {{info[16]}}
           </i>

           <i v-show="cont==3" v-on:click="greet" class ="mediano">
               {{info[12]}}
           </i>
           <i v-show="cont==1" v-on:click="greet" class ="peque">
               {{info[13]}}
           </i>
           <strong v-on:click="greet" v-show="cont==0" class ="grande">
               {{info[14]}}
           </strong>
           <i v-show="cont==1" v-on:click="greet" class ="mediano">
               {{info[15]}}
           </i>
           <i v-show="cont==2" v-on:click="greet" class ="peque">
               {{info[16]}}
           </i>

           <i v-show="cont==3" v-on:click="greet" class ="mediano">
               {{info[12]}}
           </i>
           <i v-show="cont==0" v-on:click="greet" class ="peque">
               {{info[13]}}
           </i>
           <strong v-on:click="greet" v-show="cont==1" class ="grande">
               {{info[14]}}
           </strong>
           <i v-show="cont==2" v-on:click="greet" class ="mediano">
               {{info[15]}}
           </i>
           <i v-show="cont==3" v-on:click="greet" class ="peque">
               {{info[16]}}
           </i>
           
       </div>
       
       <script src="indexprin.js"></script>
   </body>
</html>e}
      ],
      cont:1
  },
  methods: {
    getdata: function (event) {
      if(x==3) x=0;
      axios 
      .get('https://foaas.com/'+urlo[3-x]+'/'+names[x]+'/Everyone?shoutcloud')
      .then(response => (this.info = JSON.stringify(response.data.message)));
      x++;
    }
  }
})
