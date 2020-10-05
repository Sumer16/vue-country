<template>
  <div>
    <CHeader></CHeader>
    <router-view></router-view>
    <CFooter></CFooter>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader';
import CFooter from '@/components/CFooter';

export default {
  name: 'App',
  components: {
    CHeader,
    CFooter
  }  
}
</script>