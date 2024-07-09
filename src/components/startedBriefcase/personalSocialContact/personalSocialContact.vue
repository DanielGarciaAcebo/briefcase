<template>
  <div class="personalSocialContact">
    <div>
      <h3>Contacto</h3>
      <div>
        <div>
          <h4>Telefono</h4>
          <p>+34 659 36 37 43</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>danielsante@outlook.es</p>
        </div>
      </div>
    </div>

    <div>
      <h3>Links Personales</h3>
      <div class="icons">
        <div
          v-for="link in links"
          :key="link.id"
        >
          <a :href="link.value" target="_blank">
            <img :src="link.icon2500" alt="link.name" class="icon-2500"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useStartLinks } from '@/composables/startLinks/useStartLinks'

export default defineComponent({
  name:"PersonalSocialMediaLinks",
  setup: function() {
    const { linkedingLinks, oficialLinks, gitLinks, istagramLinks } = useStartLinks();

    linkedingLinks.value += '/danielgarciaacebo';
    oficialLinks.value += 'x';
    gitLinks.value += 'DanielGarciaAcebo';
    istagramLinks.value += ''
    const links = [linkedingLinks, oficialLinks,gitLinks,istagramLinks]

    return {
      links
    }
  }
});
</script>
<style scoped>

</style>