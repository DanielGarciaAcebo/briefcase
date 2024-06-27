<template>
  <div>
<!--    {{extractedParts[0].content}}-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { setupTxtExtractor } from './txtStractor';

export default defineComponent({
  name: 'TxtExtractor',
  setup() {
    const { txtContent, loadTxt, extractParts } = setupTxtExtractor();
    const extractedParts = ref<{ marker: string; content: string }[]>([]);

    onMounted(() => {
      loadTxt().then(() => {
        extractedParts.value = extractParts();

      });
    });


    return {
      txtContent,
      extractedParts
    };
  },
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>
