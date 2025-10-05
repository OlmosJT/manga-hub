import { defineStore } from 'pinia'

export const useMangaStore = defineStore('manga', () => {
    // State
    const categories = ref({});
    const likedMangaIds = ref(new Set());

    const filters = reactive({
        searchQuery: '',
    });
    const notifications = ref([
        { id: 1, text: 'Chapter 158 of "Jujutsu Kaisen" was just released!', time: '5 minutes ago', unread: true },
        { id: 2, text: '"Attack on Titan" has a new recommendation for you.', time: '1 hour ago', unread: true },
        { id: 3, text: 'Your request for "One Piece" has been approved.', time: 'Yesterday', unread: false },
    ]);

    const hasUnreadNotifications = computed(() => notifications.value.some(n => n.unread));


    // Action to fetch the data
    async function fetchAllManga() {
        if (Object.keys(categories.value).length > 0) return;

        try {
            categories.value = await $fetch('/api/manga');
        } catch (error) {
            console.error('Failed to fetch manga categories:', error);
        }
    }

    // Other actions
    const toggleLike = (mangaId) => {
        if (likedMangaIds.value.has(mangaId)) {
            likedMangaIds.value.delete(mangaId);
        } else {
            likedMangaIds.value.add(mangaId);
        }
    };

    const markNotificationsAsRead = () => {
        notifications.value.forEach(n => n.unread = false);
    };

    return { categories, likedMangaIds, filters, notifications, hasUnreadNotifications, toggleLike, fetchAllManga, markNotificationsAsRead }
})