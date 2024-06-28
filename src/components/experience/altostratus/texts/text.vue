
<template>
  <div>
    <h3>Experiencia</h3>
    <div v-if="extractedParts" >
      <div v-for="(part, index) in extractedParts" :key="index">
        <div v-if="part.marker == '->2' ">
          <ul>
            <li v-for="(line, lineIndex) in splitContentByPeriods(part.content)" :key="lineIndex">
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { setupTxtExtractor } from '@/composables/txtStractor/txtStractor';

export default defineComponent({
  name: 'AltostratusTxt',
  setup() {
    const { txtContent, loadTxt, extractParts, splitContentByPeriods, txt } = setupTxtExtractor();
    const extractedParts = ref<{ marker: string; content: string }[]>([]);

    onMounted(() => {
      loadTxt(txt('exp')).then(() => {
        extractedParts.value = extractParts();
      });
    });

    return {
      txtContent,
      extractedParts,
      splitContentByPeriods
    };
  },
});
</script>

<style scoped>


</style>
