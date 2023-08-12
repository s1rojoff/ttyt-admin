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
  default: 'md'
}
  })
</script>
<template>
  <div>
    <input 
      class="border-[#33509d]  border rounded-md outline-none py-2 px-2  focus:border-sky-500 placeholder:text-[#575757]"
      :class="{'py-2 w-[500px]' : (props.size == 'md'), 'py-1 px-1' : (props.size == 'sm')}"
      :type = "props.type"
      :value = "props.modelValue"
      :placeholder = "props.placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>