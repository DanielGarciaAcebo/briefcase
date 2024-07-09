<template>
  <h3>Biografia</h3>
  <div v-if="extractedParts" >
    <div v-for="(part, index) in extractedParts" :key="index">
      <ul>
        {{part.content}}
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { setupTxtExtractor } from '@/assets/txtStractor/txtStractor';
import ex = CSS.ex

export default defineComponent({
  name: 'biography',
  setup() {
    const { txtContent, loadTxt, extractParts, txt } = setupTxtExtractor();
    const extractedParts = ref<{ marker: string; content: string }[]>([]);

    onMounted(() => {
      loadTxt(txt('bio')).then(() => {
        extractedParts.value = extractParts();
      });
    });

    return {
      txtContent,
      extractedParts,
    };
  },
});

</script>

<style scoped>

</style>