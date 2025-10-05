<template>
  <button class="btn-primary">
    <slot />
  </button>
</template>

<style scoped>
.btn-primary {
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

  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 245, 212, 0.2);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
  filter: brightness(0.9);
}
</style>