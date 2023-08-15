<script setup lang="ts">
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue' 
</script>
<template>
    <div class="text-center uppercase text-xl">
    <p>Jalb etilgan sarmoyalar va grantlar</p>
  </div>
    <div class="mt-5 flex flex-col gap-4">
        <BaseTextarea placeholder="Xalqaro grant nomi" />
        <BaseTextarea placeholder="Amal qilayotgan yo'nalishi" />
        <BaseTextarea placeholder="Qaysi o'quv yilidan boshlab, necha yil davom etadi? (muddat)" />
        <BaseTextarea placeholder="Universitet tomonidan biriktirilgan rahbar F.I.SH. va lavozimi" />
    </div>
    <div class="text-end mt-5">
        <BaseButton />
    </div>
</template>