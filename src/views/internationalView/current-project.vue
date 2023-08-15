<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseInputTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
    <div class="text-center uppercase text-xl">
        <p>Amaldagi loyihalar</p>
    </div>
    <div class="flex gap-10 mt-5">
        <BaseInputImage />
        <div class="w-full flex flex-col gap-5">
            <BaseInput type="text" size="full" placeholder="Loyiha nomi" />
            <BaseInputTextarea placeholder="Qisqacha ma'lumot" class="h-28" />
        </div>
    </div>
    <div class="mt-5">
        <BaseInputTextarea placeholder="Qisqacha ma'lumot" class="h-28" />
    </div>
    <div class="text-end mt-5">
        <BaseButton />
    </div>
</template>