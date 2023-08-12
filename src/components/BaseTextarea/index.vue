<script setup lang="ts">
  const props = defineProps({
    cols: {
      type: String,
      default: '60'
    },
    rows: {
      type: String,
      default: '10'
    },
    placeholder: {
      type: String,
      default: 'Type something'
    }
  })
</script>
<template>
  <textarea  
    :cols="props.cols" 
    :rows="props.rows" 
    :placeholder="props.placeholder" 
    class="border border-[#33509d] rounded-md p-2 resize-none outline-none focus:border-sky-500"
  ></textarea>
</template>
