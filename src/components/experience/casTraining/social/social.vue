<template>
  <div>
    <div
      v-for="link in links"
      :key="link.id"
    >
      <a :href="link.value" target="_blank">
        <img :src="link.icon2500" alt="link.name" class="icon-2500"/>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useStartLinks } from '@/composables/startLinks/useStartLinks'

export default defineComponent({
  name:"SocialMediaLinks",
  setup: function() {
    const { linkedingLinks, oficialLinks, wikiLinks } = useStartLinks();

    linkedingLinks.value += '/company/cas-training/';
    oficialLinks.value += 'cas-training.com';

    const links = [linkedingLinks, oficialLinks]

    return {
      links
    }
  }
});
</script>
