<template>
  <button class="btn-secondary">
    <slot />
  </button>
</template>

<style scoped>
.btn-secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  font-weight: 600; /* Slightly less bold */
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;

  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: 1px solid var(--border-color);
}
.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}
.btn-secondary:active {
  transform: translateY(0);
  box-shadow: none;
  filter: brightness(0.95);
}
</style>