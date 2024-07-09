<template>
  <h3>technologies</h3>
  <div class="icons">
    <div
      v-for="tech in techs"
      :key="tech.id"
    >
      <img :src="tech.icon2500" alt="link.name" class="icon-2500"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { frameworks } from '@/composables/technologies/frameworks'
import { dataBase} from '@/composables/technologies/dataBase'
import { programmingLanguages } from '@/composables/technologies/programingLanguages'

export default defineComponent({
  name:"technologyLinks",
  setup: function() {
    const { angularJS, springBoot } = frameworks();
    const { sql } = dataBase();
    const { typeScript, javaScript, java } = programmingLanguages()

    const techs = [angularJS,springBoot,java,sql,typeScript,javaScript];

    return {
      techs
    }
  }
});
</script>
<style scoped>

</style>