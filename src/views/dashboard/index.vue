<script setup lang="ts">
import BaseSideBar from '@/components/BaseSidebar/index.vue'
import Header from '@/views/dashboard/header.vue'
import { useSidebar } from '@/views/dashboard/composable'
const { items } = useSidebar()
</script>
<template>
  <div class="h-screen w-screen overflow-hidden">
    <div class="flex justify-between items-start">
      <BaseSideBar class="w-1/5" :arr-items="items" />
      <div class="w-4/5">
        <Header />
        <div class="px-5 py-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
