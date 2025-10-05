<template>
  <AuthCard>
    <h1 class="title">Create an Account</h1>
    <p class="subtitle">Join MangaHub today!</p>

    <form @submit.prevent="handleRegister" class="auth-form">
      <BaseInput
          id="username"
          v-model="username"
          label="Username"
          placeholder="olmosjt"
          required
      />
      <BaseInput
          id="email"
          v-model="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
      />
      <BaseInput
          id="password"
          v-model="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          required
      />
      <PrimaryButton type="submit" class="mt-4">Create Account</PrimaryButton>
    </form>

    <div class="divider">OR</div>

    <SecondaryButton @click="signInWithGoogle">
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.8 4.8 0 0 1 4.48-3.3z" fill="#EA4335"></path></svg>
      <span>Sign Up with Google</span>
    </SecondaryButton>

    <p class="redirect-link">
      Already have an account? <NuxtLink to="/signin">Sign In</NuxtLink>
    </p>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue';
import PrimaryButton from "~/components/common/buttons/PrimaryButton.vue";
import SecondaryButton from "~/components/common/buttons/SecondaryButton.vue";
import BaseInput from "~/components/common/inputs/BaseInput.vue";

const { signIn } = useAuth();
definePageMeta({ layout: 'auth' });

// --- Form Models for v-model ---
const username = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();
const handleRegister = () => { router.push('/'); };
const signInWithGoogle = async () => { await signIn('google', { callbackUrl: '/' }); };
</script>

<style scoped>
.title { font-size: 1.75rem; margin-top: 0; margin-bottom: 0.5rem; color: var(--text-color); }
.subtitle { margin-top: 0; margin-bottom: 2rem; color: #888; }
.auth-form { text-align: left; }
.divider { margin: 1.5rem 0; color: #888; display: flex; align-items: center; gap: 1rem; }
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border-color); }
.redirect-link { margin-top: 2rem; font-size: 0.9rem; color: #888; }
.redirect-link a { color: var(--accent-color); font-weight: 600; }
.mt-4 { margin-top: 1rem; }
@media (max-width: 480px) { .title { font-size: 1.5rem; } }
</style>