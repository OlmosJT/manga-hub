<template>
  <div class="manga-popover">
    <h4 class="popover-title">{{ manga.title }}</h4>
    <p class="popover-synopsis">{{ manga.synopsis }}</p>
    <div class="popover-genres">
      <span v-for="genre in manga.genres" :key="genre" class="genre-tag">{{ genre }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  manga: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.manga-popover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 40%);
  color: white;
  border-radius: 0 0 12px 12px;
  padding: 2.5rem 1rem 1rem 1rem;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
  box-sizing: border-box;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.popover-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #ffffff;
}

.popover-synopsis {
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #e0e0e0;
}

.popover-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.genre-tag {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
}
</style>