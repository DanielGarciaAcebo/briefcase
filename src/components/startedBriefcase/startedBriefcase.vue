<template>
  <div>
    <Title/>
  </div>
  <div>
    <personalSocialContact/>
  </div>
  <div>
    <biography/>
  </div>
  <div>
    <technologies/>
  </div>
</template>

<script setup lang="ts">
import biography from './biography/biography.vue';
import personalSocialContact from './personalSocialContact/personalSocialContact.vue'
import Title from './title/title.vue';
import technologies from './technologies/technologies.vue'
</script>

<style scoped>
</style>