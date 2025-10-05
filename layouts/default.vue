<template>
  <div class="default-layout">
    <LayoutAppHeader />

    <main class="main-container">
      <div class="content-area">
        <slot />
      </div>
      <aside class="sidebar left-sidebar"></aside>
      <aside class="sidebar right-sidebar"></aside>
    </main>

    <LayoutAppFooter />
  </div>
</template>

<script setup></script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 2.5rem;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}
.sidebar {
  background-color: var(--surface-color);
  border-radius: 8px;
  padding: 1.5rem;
}
.content-area {
  grid-column: 2 / 3;
  min-width: 0; /* This prevents wide children from stretching the layout */
}
.left-sidebar {
  grid-column: 1 / 2;
  grid-row: 1;
}
.right-sidebar {
  grid-column: 3 / 4;
  grid-row: 1;
}

@media (max-width: 1200px) {
  .main-container {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
  .content-area {
    grid-column: 1 / -1;
    grid-row: 1;
  }
  .left-sidebar {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .right-sidebar {
    grid-column: 1 / -1;
    grid-row: 3;
  }
}
</style>