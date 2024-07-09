<template>
  <div id="app" class="app">
    <div>
      <startedBriefcase/>
    </div>
    <div>
      <experience />
    </div>
    <div>
      <projects />
    </div>

    <footer>
      <p>Iconos de
        <a href="https://icons8.com" target="_blank">
          <img src="../photos/Icons8/icons8-nuevo-logo-100.png" alt="link.name" class="icon-2500"/>
      </a></p>
      <p>© 2024 Daniel Garcia Acebo (WildFly). Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts" >
import experience from '@/components/experience/experience.vue';
import projects from '@/components/projects/Proyects.vue';
import startedBriefcase from './components/startedBriefcase/startedBriefcase.vue';

</script>

<style scoped>
@import "./assets/styles/main.scss";
</style>