<template>
  <div class="default-layout">
    <header class="app-header">
      HEADER
    </header>
    <main class="main-container">
      <div class="content-area">
        <slot /> </div>
      <aside class="sidebar left-sidebar">
        ASIDE CHATTING
      </aside>
      <aside class="sidebar right-sidebar">
        FORM REQUEST MANGA
      </aside>
    </main>
    <footer class="app-footer">
      FOOTER
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header, .app-footer {
  flex-shrink: 0;
  background-color: var(--primary-color);
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.app-footer {
  border-top: 1px solid var(--border-color);
  border-bottom: none;
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

/* Re-order content for the grid layout */
.content-area {
  grid-column: 2 / 3;
}
.left-sidebar {
  grid-column: 1 / 2;
  grid-row: 1; /* Ensures it stays in the first row */
}
.right-sidebar {
  grid-column: 3 / 4;
  grid-row: 1; /* Ensures it stays in the first row */
}


/* --- MOBILE STYLES --- */
@media (max-width: 1200px) {
  .main-container {
    /* Switch to a single column layout */
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }

  /* Assign rows to stack them correctly */
  .content-area {
    grid-column: 1 / -1; /* Take full width */
    grid-row: 1;
  }
  .left-sidebar {
    grid-column: 1 / -1; /* Take full width */
    grid-row: 2;
  }
  .right-sidebar {
    grid-column: 1 / -1; /* Take full width */
    grid-row: 3;
  }
}
</style>