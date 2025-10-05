<template>
  <NuxtLink :to="`/manga/${manga.id}`" class="manga-card-link">
    <div
        class="manga-card"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
      <MangaPopover v-if="isHovered" :manga="manga" />

      <button @click.prevent.stop="store.toggleLike(manga.id)" class="like-button" :class="{ liked: isLiked }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>

      <img :src="manga.imageUrl" :alt="manga.title" class="manga-card-image" />

      <div class="manga-card-content">
        <h3 class="manga-card-title">{{ manga.title }}</h3>
        <p class="manga-card-author">By {{ manga.author }}</p>
        <div class="tags-container">
          <CommonTag :label="manga.status" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMangaStore } from '~/stores/manga';

const props = defineProps({
  manga: { type: Object, required: true },
});

const isHovered = ref(false);

// Connect to the Pinia store
const store = useMangaStore();
const isLiked = computed(() => store.likedMangaIds.has(props.manga.id));
</script>

<style scoped>
.manga-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.manga-card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden; /* Use hidden instead of clip for better browser support */
  box-shadow: 0 4px 12px rgba(0,0,0,.3);
  background-color: var(--surface-color);
  transition: transform .3s ease, box-shadow .3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.manga-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,.4);
}
.manga-card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.manga-card-content {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.manga-card-title {
  margin: 0 0 4px;
  font-size: 1.25rem;
  color: var(--text-color);
}
.manga-card-author {
  margin: 0 0 12px;
  font-size: .9rem;
  color: #aaa;
  line-height: 1.4;
  flex-grow: 1;
}
.tags-container {
  text-align: left;
}
.like-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  background-color: rgba(30, 30, 30, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 0;
}
.like-button:hover {
  transform: scale(1.1);
  background-color: var(--primary-color);
  box-shadow: none; /* Override global hover shadow */
}
.like-button:active {
  transform: scale(1); /* Override global active transform */
  filter: none;
}
.like-button svg {
  width: 20px;
  height: 20px;
  fill: #aaa;
  transition: fill 0.2s ease;
}
.like-button.liked svg {
  fill: #E8112D;
}
</style>