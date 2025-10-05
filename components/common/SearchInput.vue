<template>
  <div class="search-container">
    <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="search-input"
        placeholder="Search for a manga..."
    />
  </div>
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.search-container {
  position: relative;
}
.search-input {
  width: 100%;
  min-width: 250px;
  padding: 10px 18px 10px 40px; /* Add padding for icon */
  border-radius: 25px;
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-color);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}
.search-input:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 8px rgba(0, 245, 212, 0.25);
}
.search-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #888;
}
</style>