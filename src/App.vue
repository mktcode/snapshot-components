<script setup lang="ts">
import Proposal from './components/Proposal.vue'
</script>

<template>
  <Proposal
    :proposal="{
      title: 'My Proposal!',
      excerpt: 'This is the text excerpt from the proposal.'
    }"
  />
</template>
