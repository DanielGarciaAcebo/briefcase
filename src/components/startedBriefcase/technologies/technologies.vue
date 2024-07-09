<template>
  <div class="technologiesBio">
    <div>
      <h3>Lenguajes de Programacion</h3>
      <div class="languages-tech">
        <div
          v-for="language in languages"
          :key="language.id"
        >
          <ul>
            <li>{{ language.name }} <img :src="language.icon2500" alt="language.name" class="icon-625"/></li>
            <div v-for="frame in frames"
                 :key="frame.id">
              <div v-if="language.framework.includes(frame.name)">
                <ul>
                  <li>{{ frame.name }}<img :src="frame.icon2500" alt="frame.name" class="icon-625"/></li>
                </ul>
              </div>
            </div>
          </ul>

        </div>
      </div>
    </div>
    <div>
      <h3>Tecnologias</h3>
      <div>
        <div
          v-for="tech in techs"
          :key="tech.id"
        >
          <ul>
            <li>{{ tech.name }}<img :src="tech.icon2500" alt="link.name" class="icon-625"/></li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>Metodologias</h3>
      <div>
        <div
          v-for="metodo in metodos"
          :key="metodo.id"
        >
          <ul>
            <li>{{ metodo.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h3>Bases de Datos</h3>
      <div>
        <div
          v-for="database in databases"
          :key="database.id"
        >
          <ul>
            <li>{{database.name}}<img :src="database.icon2500" alt="database.name" class="icon-625"/></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { programmingLanguages } from '@/composables/technologies/programingLanguages'
import { dataBase } from '@/composables/technologies/dataBase'
import { methodologies } from '@/composables/technologies/metodologies'
import { frameworks } from '@/composables/technologies/frameworks'
import { technologies } from "@/composables/technologies/technologies";

export default defineComponent({
  name:"technologyLinks",
  setup: function() {
    const { typeScript, javaScript, java, golang, php, python } = programmingLanguages();
    const { mongoDB, sql, atlas } = dataBase();
    const { agile, testUnitariasFuncionales, microservicios, frontToBack } = methodologies();
    const { vueJS, django, nodeJS, flask, laravel, react, angularJS, springBoot } = frameworks();
    const { kubernetes, jenkins, jetBrain, linux, selenium, gitHub, GoogleCloud} = technologies();

    const languages = [typeScript, javaScript, java, golang, php, python]
    const databases = {mongoDB, sql, atlas}
    const metodos = [agile, testUnitariasFuncionales, microservicios, frontToBack]
    const frames = [vueJS, django, nodeJS, flask, laravel, react, angularJS, springBoot]
    const techs = [kubernetes, jenkins, jetBrain, linux, selenium, gitHub, GoogleCloud]


    return {
      languages,
      databases,
      metodos,
      frames,
      techs
    }
  }
});
</script>

<style scoped>

</style>