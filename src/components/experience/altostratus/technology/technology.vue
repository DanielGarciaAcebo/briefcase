<template>
  <h3>tecnologias</h3>
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
    const { angularJS, django } = frameworks();
    const { atlas,mongoDB } = dataBase();
    const { typeScript, javaScript,golang, python } = programmingLanguages()

    const techs = [angularJS, django,golang,python,atlas,mongoDB,typeScript,javaScript];

    return {
      techs
    }
  }
});
</script>
<style scoped>

</style>