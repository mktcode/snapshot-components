<script setup lang="ts">
interface Proposal {
  title: string;
  excerpt?: string;
}

interface Props {
  proposal: Proposal;
}

withDefaults(defineProps<Props>(), {
  proposal: () => ({
    title: 'A proposal',
    excerpt: 'This is a very long text for a proposal demo.'
  })
});
</script>

<template>
  <div>
    <div>{{ proposal.title }}</div>
    <div>{{ proposal.excerpt }}</div>
  </div>
</template>