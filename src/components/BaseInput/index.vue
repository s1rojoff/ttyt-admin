<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'full',
    validator: (value: string) => ['sm', 'md', 'full'].includes(value)
  }
})
</script>
<template>
  <div>
    <input
      class="border-[#33509d] border rounded-md outline-none focus:border-sky-500 placeholder:text-[#575757]"
      :class="{
        'py-1 px-1 w-[300px]': props.size == 'sm',
        'py-1 px-1 w-[500px]': props.size == 'md',
        'py-1 px-1 w-full': props.size == 'full'
      }"
      :type="props.type"
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="props.placeholder"
    />
  </div>
</template>
