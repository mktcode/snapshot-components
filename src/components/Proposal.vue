<script setup lang="ts">
interface Proposal {
  title: string;
  excerpt?: string;
}

interface Props {
  proposal: Proposal;
  allowVoting?: boolean;
  showResults?: boolean;
}

withDefaults(defineProps<Props>(), {
  proposal: () => ({
    title: 'A proposal',
    excerpt: 'This is a very long text for a proposal demo.'
  }),
  allowVoting: true,
  showResults: true
});
</script>

<template>
  <div>
    <div>{{ proposal.title }}</div>
    <div>{{ proposal.excerpt }}</div>
  </div>
</template>