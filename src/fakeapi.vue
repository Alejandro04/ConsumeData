<template>
   <div>
    <div id="fake-api" v-if="fakeapi != null">
      <table class="table table-striped">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
        </thead>
        <tbody>
                <tr class="text" v-for="fake in fakeapi" :key="fake.id">
                    <th scope="row">{{fake.id}}</th>
                    <td>{{fake.title}}</td>
                    <td>{{fake.body}}</td>
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
export default {
  name: 'fakeapi',
   mounted(){
     this.getFakeapi()
  },
  data(){
      return{
          text: 'Fake Api View',
          fakeapi: null
      }
  },
  methods: {
      getFakeapi(){
          axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then((response) => {
                  this.fakeapi = response.data
                })
      }
  }
}
</script>
