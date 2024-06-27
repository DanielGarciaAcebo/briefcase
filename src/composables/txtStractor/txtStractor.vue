<template>
<dic>
  {{txtContent}}
</dic>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { setupTxtExtractor } from './txtStractor';

export default defineComponent({
  name: 'TxtExtractor',
  setup() {
    const { txtContent, loadTxt } = setupTxtExtractor();

    onMounted(() => {
      loadTxt();
    });

    return {
      txtContent,
    };
  },
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>
