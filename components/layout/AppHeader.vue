<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <NuxtLink to="/public" class="logo">MangaHub</NuxtLink>
        <nav class="navigation">
          <ul>
            <li><NuxtLink to="/public">Home</NuxtLink></li>
            <li><NuxtLink to="/browse">Browse</NuxtLink></li>
            <li v-if="isAuthenticated"><NuxtLink to="/my-list">My List</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <div class="search-wrapper">
          <CommonSearchInput
              v-model="store.filters.searchQuery"
              @search="handleSearch"
          />
        </div>

        <template v-if="isAuthenticated">
          <div class="user-actions" ref="profileRef">
            <div class="profile" @click="toggleProfileDropdown">
              <img :src="data?.user?.image || 'https://i.pravatar.cc/40'" alt="Profile" />
              <Transition name="dropdown-fade">
                <LayoutProfileDropdown v-if="isProfileDropdownVisible" />
              </Transition>
            </div>
          </div>
        </template>
        <NuxtLink v-else to="/auth/signin" class="btn-login">Log In</NuxtLink>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useMangaStore } from '~/stores/manga.js';
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const store = useMangaStore();
const { status, data } = useAuth();
const router = useRouter();
const route = useRoute();

const isProfileDropdownVisible = ref(false);
const profileRef = ref(null);

const isAuthenticated = computed(() => status.value === 'authenticated');

const toggleProfileDropdown = () => {
  isProfileDropdownVisible.value = !isProfileDropdownVisible.value;
};

// --- Click Outside Logic ---
const handleClickOutside = (event) => {
  // If the dropdown is visible and the click is outside the profile area...
  if (profileRef.value && !profileRef.value.contains(event.target)) {
    // ...close the dropdown.
    isProfileDropdownVisible.value = false;
  }
};

onMounted(() => {
  // Add listener when component mounts
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  // Clean up listener when component unmounts
  window.removeEventListener('click', handleClickOutside);
});
// -------------------------

const handleSearch = () => {
  if (store.filters.searchQuery && route.path !== '/browse') {
    router.push('/browse');
  }
};

// Watch for route changes to also close the dropdown
watch(() => route.path, () => {
  isProfileDropdownVisible.value = false;
});
</script>

<style scoped>
.dropdown-fade-enter-active, .dropdown-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.dropdown-fade-enter-from, .dropdown-fade-leave-to { opacity: 0; transform: translateY(-10px); }

.app-header { padding: 1rem 0; background-color: var(--primary-color); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); border-bottom: 1px solid var(--border-color); }
.header-content { display: flex; justify-content: space-between; align-items: center; max-width: 1680px; margin: 0 auto; padding: 0 2rem; box-sizing: border-box; }
.header-left, .header-right { display: flex; align-items: center; gap: 2.5rem; }
.logo { font-size: 1.75rem; font-weight: bold; color: var(--text-color); text-decoration: none; }
.navigation ul { display: flex; list-style: none; margin: 0; padding: 0; gap: 2rem; }
.navigation a { text-decoration: none; color: #aaa; font-weight: 600; padding-bottom: 5px; border-bottom: 2px solid transparent; transition: all 0.3s; }
.navigation a:hover { color: var(--text-color); }
.navigation .router-link-exact-active { color: var(--accent-color); border-bottom-color: var(--accent-color); }

.search-wrapper {
  flex-grow: 1; /* Allows the search bar to take up available space */
  min-width: 0; /* Prevents the search input from overflowing its container */
}

.user-actions, .btn-login {
  flex-shrink: 0; /* Prevents the user icon/button from being squished */
  margin-left: 2.5rem;
}
.profile { position: relative; cursor: pointer; }
.profile img { width: 40px; height: 40px; border-radius: 50%; display: block; border: 2px solid var(--border-color); }
.btn-login { padding: 8px 20px; border: 1px solid var(--border-color); border-radius: 8px; text-decoration: none; color: var(--text-color); font-weight: 600; transition: all 0.2s ease; }
.btn-login:hover { background-color: var(--surface-color); border-color: var(--accent-color); }
</style>