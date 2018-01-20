<template>
   <div>
    <div id="marvel-api" v-if="marvelapi != null">
      <table class="table table-striped">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            </tr>
        </thead>
        <tbody>
                <tr class="text" v-for="marvel in marvelapi" :key="marvel.id">
                    <th scope="row">{{marvel.id}}</th>
                    <th>{{marvel.title}}</th>
                </tr>
        </tbody>
        </table>
    </div>     
    <span v-else>Cargando...</span>
   </div>
</template>

<style>
    .text{
        text-align: left;
    }
    .table{
        width: 80%;
        margin: auto;
    }
</style>



<script>
import axios from 'axios'
import $ from 'jquery'
import CryptoJS from 'crypto-js'


export default {
  name: 'marvelapi',
   mounted(){
     this.getMarvelapi()
  },
  data(){
      return{
          text: 'Marvel Api View',
          marvelapi: null,
      }
  },
  methods: {
      getMarvelapi(){
        // you will also have to setup the referring domains on your marvel developer portal
        var PRIV_KEY = "a00a34376ea43989e813ffcabb97abc5da9ee243";
        var PUBLIC_KEY = "4f8c7353018720feac82d29f9203e19c";

        // you need a new ts every request                                                                                    
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
        
        // the api deals a lot in ids rather than just the strings you want to use
        var characterId = '1009718'; // wolverine                                                                             

        var url = 'http://gateway.marvel.com:80/v1/public/comics';

        console.log(url);
        $.getJSON(url, {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            characters: characterId
            })
            .done(function(data) {
            // sort of a long dump you will need to sort through
            console.log(data.data.results);
                this.marvelapi = data.data.results
            })
            .fail(function(err){
                // the error codes are listed on the dev site
                console.log(err);
            });
        
      }
  }
}
</script>
