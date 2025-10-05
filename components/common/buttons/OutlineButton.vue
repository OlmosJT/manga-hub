<template>
  <button class="btn-outline">
    <slot />
  </button>
</template>

<style scoped>
.btn-outline {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  font-weight: bold;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;

  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
}
.btn-outline:hover {
  background-color: rgba(0, 245, 212, 0.1);
  transform: translateY(-2px);
}
.btn-outline:active {
  transform: translateY(0);
  background-color: rgba(0, 245, 212, 0.2);
}
</style>