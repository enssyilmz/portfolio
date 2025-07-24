<template>
  <div
    v-if="visible"
    class="fixed top-4 right-4 bg-yellow-sea-600 px-4 py-2 rounded-lg shadow-lg flex items-center justify-between gap-4 z-50"
  >
    <span class="text-white">{{ message }}</span>
    <button @click="close" class="bg-yellow-sea-600 font-bold">×</button>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 3000,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) {
      setTimeout(() => {
        close()
      }, props.duration)
    }
  },
)

function close() {
  visible.value = false
  emit('update:modelValue', false)
}
</script>
