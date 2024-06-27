<template>
  <div id="app">
    <header>
      <h1>Bienvenido a Mi Portafolio</h1>
    </header>

    <div>

    </div>
    <div>
      <experience />
    </div>
    <div>
      <projects />
    </div>

    <footer>
      <p>© 2024 Daniel Garcia Acebo (WildFly). Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts" >
import experience from '@/components/experience/experience.vue';
import projects from '@/components/projects/Proyects.vue'

</script>

<style scoped>

</style>