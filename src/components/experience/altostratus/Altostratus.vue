
<template>
  <div class="table-layout">
    <div class="expTxt">
      <AltostratusTxt/>
    </div>
    <div class="expSocial">
      <social-media-links />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import AltostratusTxt from './texts/text.vue'
  import SocialMediaLinks from '@/components/experience/altostratus/social/social.vue'

</script>

<style >
@import "../../../assets/styles/main.scss";
</style>