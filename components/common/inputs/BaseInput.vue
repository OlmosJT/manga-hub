<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  "id": { type: String, required: true },
  "label": { type: String, required: true },
  "modelValue": { type: String, required: true },
  "type": { type: String, default: 'text' },
  "placeholder": { type: String, default: '' },
  "required": { type: Boolean, default: false },
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-color);
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group input::placeholder {
  color: #888;
}

.form-group input:-webkit-autofill,
.form-group input:-webkit-autofill:hover,
.form-group input:-webkit-autofill:focus,
.form-group input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px var(--background-color) inset !important;
  -webkit-text-fill-color: var(--text-color) !important;
  caret-color: var(--text-color) !important;
}
</style>