<template>
  <div class="region">
    <div class="text-center pt-4">
      <input type="text" id="searchbox" placeholder="Enter a Region..." class="border border-black mr-3 p-2 rounded-lg">
      <button v-on:click="getRegion" class="border border-gray-600 bg-gray-100 text-gray-800 px-5 py-2 rounded-lg">Submit</button>
    </div>
    <div class="flex flex-col justify-center items-center my-5">
      <div v-for="arr in arrayR" :key="arr.name" class="w-64 h-64 border border-red-400 flex flex-col justify-center items-center">
        <img :src="arr.flag" :alt="arr.name + '\'s Flag'" class="m-auto h-24 w-32">
        <p>Name <br>{{ arr.capital }}, {{ arr.name }} ({{ arr.alpha3Code }})</p>
        <!-- <p>Share's Border with {{ arr.borders[0] }}</p> -->
        <p>Currency Used: {{ arr.currencies[0].name }}</p>
        <!-- <p>What are they called {{ arr.demonym }}</p> -->
        <!-- <p>Natively called as {{ arr.nativeName }}</p> -->
        <p>Present in<br>{{ arr.subregion }}, {{ arr.region }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import axios from 'axios';

export default {
  name: 'Region',
  data() {
    return {
      arrayR: [],
    }
  },
  methods: {
    getRegion() {
      const inputValue = document.querySelector('#searchbox').value;
      const region = inputValue;
      axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((res) => {
        for(const key of res.data) {
          this.arrayR.unshift(key);
          console.log(key);
        }
      })
      .catch((err) => {
        alert('Please Entry a valid Country Capital');
        console.log(err);
      })
    }
  },
  computed() {
    this.getRegion();
  }
}
</script>
