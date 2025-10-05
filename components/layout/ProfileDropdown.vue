<template>
  <div class="profile-dropdown">
    <div class="dropdown-header">
      <p class="username">{{ data?.user?.name || 'User' }}</p>
      <p class="email">{{ data?.user?.email }}</p>
    </div>
    <ul>
      <li><NuxtLink to="/profile">Profile</NuxtLink></li>
      <li><NuxtLink to="/settings">Settings</NuxtLink></li>
      <li class="divider"></li>
      <li>
        <a href="#" @click.prevent="handleLogout" class="logout">Log Out</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Get user data and the signOut function from nuxt-auth
const { data, signOut } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await signOut({ callbackUrl: '/auth/signin' });
};
</script>

<style scoped>
.profile-dropdown { position: absolute; top: calc(100% + 10px); right: 0; background-color: var(--surface-color); border-radius: 12px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); width: 220px; border: 1px solid var(--border-color); z-index: 100; }
.dropdown-header { padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-color); }
.username { margin: 0; font-weight: 600; font-size: 1rem; color: var(--text-color); }
.email { font-size: 0.8rem; color: #888; margin: 0.25rem 0 0; }
ul { list-style: none; margin: 0; padding: 0.5rem; }
li a { display: block; padding: 0.75rem 1rem; color: var(--text-color); text-decoration: none; border-radius: 8px; transition: all 0.2s ease; }
li a:hover { background-color: var(--background-color); color: var(--accent-color); }
li a.logout:hover { background-color: #552222; color: #ff8888; }
.divider { height: 1px; background-color: var(--border-color); margin: 0.5rem; }
</style>