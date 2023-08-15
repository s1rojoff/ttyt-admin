<script setup lang="ts">
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
</script>
<template>
    <div class="text-center uppercase text-xl">
        <p>Ma'daniy va ma'rifiy tadbirlar</p>
    </div>
    <div class="flex gap-10 mt-5">
        <BaseInputImage />
        <div class="w-full flex flex-col gap-5">
            <BaseInput placeholder="Tadbir nomi" />
            <BaseTextarea placeholder="to'liq ma'lumot" class="h-32" />
        </div>
    </div>
    <div class="text-end mt-5">
        <BaseButton />
    </div>
</template>