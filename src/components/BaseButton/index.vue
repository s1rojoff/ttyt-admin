<script setup lang="ts">
  const emits = defineEmits(['update:modelValue'])
  const props = defineProps({
    size:{
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      default: 'Save'
    }
  })
</script>
<template>
  <div>
    <button
      class="rounded-md px-10 py-2 bg-[#33509d] text-white hover:bg-[#001018] transition-colors inline-none focus:border-sky-500"
      :class="{'w-full' : (props.size == 'full')}"
    >
      {{ props.name }}
    </button>
  </div>
</template>