<script setup lang="ts">
interface Proposal {
  title?: string;
}

withDefaults(defineProps<Proposal>(), {
  title: 'A proposal'
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>