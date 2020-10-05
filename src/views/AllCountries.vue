<template>
  <div class="grid grid-col lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 justify-items-center m-8">
    <div v-for="arr in arrayS" :key="arr.name" class="bg-gray-200 shadow-lg w-full h-48 flex flex-col justify-evenly items-center">
      <div class="w-24 h-auto">
        <img :src="arr.flag" :alt="arr.name + '\'s Flag'">
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-column justify-around items-center flex-wrap">
          <p class="text-xl mr-1 break-words text-center">{{ arr.name }}</p>
          <span class=" text-sm">({{ arr.alpha3Code }})</span>
        </div>
        <p class="text-lg text-center tracking-wider">{{ arr.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'AllCountries',
  data() {
    return {
      arrayS: []
    }
  },
  created() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then((res) => {
      console.log(res.data);
      for(const key of res.data){
        console.log(key);
        this.arrayS.push(key);
      }
    })
  }
}
</script>

<style>

</style>
