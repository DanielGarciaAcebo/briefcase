
<template>
  <div class="table-layout">
    <div class="expTxt">
      <AltostratusTxt/>
    </div>
    <div class="expSocial">
      <SocialMediaLinks/>
    </div>
    <div class="expSocial">
      <technology/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import AltostratusTxt from './texts/text.vue'
  import SocialMediaLinks from '@/components/experience/altostratus/social/social.vue'
  import technology from '@/components/experience/altostratus/technology/technology.vue'
</script>

<style >
@import "../../../assets/styles/main.scss";
</style>