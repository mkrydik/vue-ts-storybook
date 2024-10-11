<script lang="ts">
const graphData = {
  nodes: [
    {
      id: '20',
      type: 'rect',
      x: 100,
      y: 100,
      text: 'Rect Node'
    },
    {
      id: '50',
      type: 'circle',
      x: 250,
      y: 250,
      text: 'Circle Node'
    }
  ],
  edges: [
    {
      type: 'polyline',
      sourceNodeId: '50',
      targetNodeId: '20'
    }
  ]
};
</script>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/index.css';

const container = ref<HTMLElement>();

onMounted(() => {
  const lf = new LogicFlow({
    container: container.value!,
    width : 800,
    height: 400
  });
  lf.render(graphData);
});
</script>

<template>
<h1>Vue TS + Storybook</h1>
<div id="container" ref="container"></div>
</template>

<style scoped>
h1, #container {
  margin: 1rem;
}

#container {
  width : 800px;
  height: 400px;
  border: 1px solid #ccc;
}
</style>
