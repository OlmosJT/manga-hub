<template>
  <div class="auth-card">
    <slot />
  </div>
</template>

<style scoped>
.auth-card {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid var(--border-color);
}

@media (max-width: 480px) {
  .auth-card {
    padding: 1.5rem;
  }
}
</style>