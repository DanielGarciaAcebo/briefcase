<template>
  <div class="table-layout">
    <div class="expTxt">
      <casText/>
    </div>
    <div class="expSocial">
      <socialLinks/>
    </div>
    <div class="expSocial">
      <technology-links/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import casText from './texts/text.vue'
import socialLinks from './social/social.vue'
import TechnologyLinks from '@/components/experience/casTraining/technology/technology.vue'

</script>

<style >
@import "../../../assets/styles/main.scss";
</style>