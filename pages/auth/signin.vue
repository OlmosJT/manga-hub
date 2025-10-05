<template>
  <AuthCard>
    <div v-if="activeMethod !== 'phone' || phoneAuthState === 'input'">
      <h1 class="title">Sign In to MangaHub</h1>
    </div>

    <div class="auth-methods">
      <button @click="activeMethod = 'email'" :class="{ active: activeMethod === 'email' }">Email</button>
      <button @click="activeMethod = 'phone'" :class="{ active: activeMethod === 'phone' }">Phone</button>
    </div>

    <div class="form-container">
      <form v-if="activeMethod === 'email'" @submit.prevent="handleLogin" class="auth-form">
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
        <PrimaryButton type="submit" class="mt-4">Sign In</PrimaryButton>
      </form>

      <div v-if="activeMethod === 'phone'">
        <form v-if="phoneAuthState === 'input'" @submit.prevent="sendOtp" class="auth-form">
          <BaseInput
              id="phone"
              v-model="phone"
              label="Phone Number"
              type="tel"
              placeholder="+998 XX XXX-XX-XX"
              required
          />
          <OutlineButton type="submit">Send OTP</OutlineButton>
        </form>

        <form v-if="phoneAuthState === 'verify'" @submit.prevent="handleOtpVerification" class="auth-form">
          <h1 class="title">Enter Code</h1>
          <p class="subtitle">We sent a verification code to your phone.</p>
          <BaseInput
              id="otp"
              v-model="otp"
              label="Verification Code"
              type="text"
              placeholder="••••••"
              required
          />
          <PrimaryButton type="submit" class="mt-4">Verify & Sign In</PrimaryButton>
        </form>
      </div>
    </div>

    <div class="divider">OR</div>

    <SecondaryButton @click="signInWithGoogle">
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.8 4.8 0 0 1 4.48-3.3z" fill="#EA4335"></path></svg>
      <span>Continue with Google</span>
    </SecondaryButton>

    <p class="redirect-link">
      Don't have an account? <NuxtLink to="/auth/signup">Sign Up</NuxtLink>
    </p>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from "~/components/common/inputs/BaseInput.vue";
import SecondaryButton from "~/components/common/buttons/SecondaryButton.vue";
import PrimaryButton from "~/components/common/buttons/PrimaryButton.vue";
import OutlineButton from "~/components/common/buttons/OutlineButton.vue";

const { signIn } = useAuth();
definePageMeta({ layout: 'auth' });

// --- Component State ---
const activeMethod = ref('email');
const phoneAuthState = ref('input');

// --- Form Models for v-model ---
const email = ref('');
const password = ref('');
const phone = ref('');
const otp = ref('');

const router = useRouter();
const handleLogin = () => { router.push('/'); };
const sendOtp = () => { phoneAuthState.value = 'verify'; };
const handleOtpVerification = () => { router.push('/'); };
const signInWithGoogle = async () => { await signIn('google', { callbackUrl: '/' }); };
</script>

<style scoped>
.title { font-size: 1.75rem; margin:0 0 1.5rem; color: var(--text-color); }
.subtitle { margin: -1rem 0 1.5rem; color: #888; }
.auth-methods { display: flex; background-color: var(--background-color); border-radius: 8px; padding: 4px; margin-bottom: 1.5rem; }
.auth-methods button { flex: 1; padding: 0.75rem; border: none; background: transparent; color: #888; }
.auth-methods button.active { background-color: var(--surface-color); box-shadow: 0 2px 4px rgba(0,0,0,0.2); color: var(--accent-color); }
.form-container { min-height: 230px; }
.auth-form { text-align: left; }
.divider { margin: 1.5rem 0; color: #888; display: flex; align-items: center; gap: 1rem; }
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border-color); }
.redirect-link { margin-top: 2rem; font-size: 0.9rem; color: #888; }
.redirect-link a { color: var(--accent-color); font-weight: 600; }
.mt-4 { margin-top: 1rem; }
@media (max-width: 480px) { .title { font-size: 1.5rem; } }
</style>