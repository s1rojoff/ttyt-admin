<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
    <div class="text-center uppercase text-xl">
        <p>Tanlovlar va grantlar</p>
    </div>
    <div class="flex flex-col gap-5 mt-5">
        <BaseInput type="" />
        <BaseInput type="" />
        <BaseInput type="" />
    </div>
    <div class="text-center uppercase text-xl mt-5">
        <p>Stipendiyalar</p>
    </div>
    <div class="flex flex-col gap-5 mt-5">
        <BaseInput type="" />
        <BaseInput type="" />
        <BaseInput type="" />
    </div>
    <div class="text-end mt-5">
        <BaseButton />
    </div>
</template>