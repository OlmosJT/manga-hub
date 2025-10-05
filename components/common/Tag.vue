<template>
  <span class="status-tag" :class="tagType">{{ label }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
});

const tagType = computed(() => {
  switch (props.label.toLowerCase()) {
    case 'ongoing': return 'tag-ongoing';
    case 'finished': return 'tag-finished';
    case 'hiatus': return 'tag-hiatus';
    default: return 'tag-default';
  }
});
</script>

<style scoped>
.status-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
}

.tag-ongoing {
  background-color: #28a745;
}
.tag-finished {
  background-color: #007bff;
}
.tag-hiatus {
  background-color: #ffc107;
  color: #333;
}
.tag-default {
  background-color: #6c757d;
}
</style>