<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseInputTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
    <div class="text-center uppercase text-xl">
        <p>Yangiliklar</p>
    </div>
    <div class="mt-5 flex gap-5 w-full">
        <div>
            <BaseInputImage />
        </div>
        <div class="w-full flex flex-col gap-5">
            <BaseInput type="text" placeholder="Kategoriya" />
            <BaseInput type="date" size="sm" />
        </div>
    </div>
    <div class="mt-5">
        <BaseInputTextarea placeholder="Yangilik haqida ma'lumot" class="h-32" />
    </div>
    <div class="text-end mt-5">
        <BaseButton />
    </div>
</template>