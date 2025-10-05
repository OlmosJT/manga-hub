<template>
  <div class="home-view">
    <section class="banner-section">
      <div class="banner-content">
        <p class="tagline">Now Trending: Jujutsu Kaisen</p>
        <h2 class="banner-title">Jujutsu Kaisen Banner</h2>
        <p class="description">Dive into a world of curses and sorcery. Find out why everyone is talking about Jujutsu High.</p>
        <NuxtLink to="/manga/4" class="banner-button">Read Now &rarr;</NuxtLink>
      </div>
      <div class="banner-image"></div>
    </section>

    <div v-for="(categoryData, key) in categories" :key="key">
      <div class="category-header">
        <h2 class="category-title">{{ categoryData.title }}</h2>
        <NuxtLink to="/browse" class="see-all-button">See All &rarr;</NuxtLink>
      </div>

      <div class="manga-row" :ref="el => { if (el) mangaRows[key] = el }">
        <div v-for="manga in categoryData.items" :key="manga.id" class="manga-item-wrapper">
          <MangaCard :manga="manga" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMangaStore } from '~/stores/manga';
import { ref, onMounted } from 'vue';

// This alias tells Nuxt to also serve this page at the root URL ('/')
definePageMeta({
  alias: ['/']
});

// --- Data Fetching ---
const store = useMangaStore();
await store.fetchAllManga();
const { categories } = storeToRefs(store);

// --- Drag to Scroll Logic ---
const mangaRows = ref({});

// After the component mounts, apply the drag-to-scroll logic to each row
onMounted(() => {
  for (const key in mangaRows.value) {
    const rowElement = ref(mangaRows.value[key]);
    useDragToScroll(rowElement);
  }
});
</script>

<style scoped>
/* Banner and Category Header styles */
.banner-section { display: flex; background: linear-gradient(90deg, #5e35b1 0%, #7b1fa2 100%); color: white; border-radius: 12px; overflow: hidden; margin-bottom: 2.5rem; min-height: 250px; position: relative; }
.banner-content { padding: 2.5rem; flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 60%; }
.tagline { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; opacity: 0.8; }
.banner-title { font-size: 2.5rem; font-weight: 800; margin: 0; line-height: 1.2; }
.description { font-size: 1.1rem; margin: 1rem 0 1.5rem; opacity: 0.9; line-height: 1.6; }
.banner-button { display: inline-block; padding: 0.8rem 1.8rem; background-color: var(--accent-color); color: var(--primary-color); text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.2s ease; align-self: flex-start; }
.banner-button:hover { transform: translateY(-2px); filter: brightness(1.1); }
.banner-image { flex: 1; background: url('https://placehold.co/600x400/7B1FA2/white?text=Jujutsu+Kaisen+Banner') no-repeat center center; background-size: cover; }
.category-header { display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); }
.category-title { font-size: 1.8rem; margin: 0; color: var(--text-color); }
.see-all-button { color: var(--accent-color); text-decoration: none; font-weight: 600; transition: color 0.3s ease; }
.see-all-button:hover { filter: brightness(0.8); }

/* Styles for the horizontal row */
.manga-row {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-width: none; /* For Firefox */
  cursor: grab; /* Indicates the area is draggable */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
}
.manga-row.active {
  cursor: grabbing; /* Cursor style when actively dragging */
}
.manga-row::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
.manga-item-wrapper {
  flex: 0 0 200px; /* Prevents cards from shrinking and sets their width */
}

/* Responsive styles */
@media (max-width: 768px) {
  .banner-section { flex-direction: column; text-align: center; }
  .banner-content { max-width: 100%; padding: 2rem; align-items: center; }
  .banner-image { min-height: 200px; }
  .banner-title { font-size: 2rem; }
  .description { font-size: 1rem; }
}
</style>