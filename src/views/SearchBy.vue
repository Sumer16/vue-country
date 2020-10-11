<template>
  <div class="search">
    <h1 class="px-4 py-3 uppercase text-4xl text-center">Search By</h1>
    <div class="flex flex-col justify-center my-1">
      <div v-for="d in search" :key="d.title" class="my-4 mx-4 text-center shadow-lg rounded-md py-3 px-1 bg-gray-300">
        <p class="uppercase text-2xl font-mono">{{ d.title }}</p>
        <span class="text-base font-light">{{ d.subtitle}}</span>
        <router-link :to="d.route">Click Here</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Search',
  data() {
    return {
      search: [
        {
          title: 'Country',
          subtitle: 'E.g. Denmark, Aruba, etc.',
          route: '/search-by/country'
        },
        {
          title: 'Capital',
          subtitle: 'E.g. Paris, London, etc.',
          route: '/search-by/capital'
        },
        {
          title: 'Region',
          subtitle: 'E.g. Europe, Africa, etc.',
          route: '/search-by/region'
        },
        {
          title: 'Calling Code',
          subtitle: 'E.g. 372, 91, etc.',
          route: '/search-by/calling-code'
        },
        {
          title: 'Currency Code',
          subtitle: 'E.g. inr, cop, etc.',
          route: '/search-by/currency-code'
        }
      ]
    }
  }
}
</script>
