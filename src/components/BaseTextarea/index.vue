<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type something'
  }
})
</script>
<template>
  <textarea
    :placeholder="props.placeholder"
    class="border border-[#33509d] w-full rounded-md p-2 resize-none outline-none focus:border-sky-500"
  ></textarea>
</template>
