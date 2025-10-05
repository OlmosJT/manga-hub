<template>
  <div class="auth-layout">
    <slot /> </div>
</template>

<script setup>
</script>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

/* --- MOBILE STYLES --- */
@media (max-width: 768px) {
  .auth-layout {
    padding: 1rem;
  }
}
</style>