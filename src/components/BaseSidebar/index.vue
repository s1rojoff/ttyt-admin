<script setup lang="ts">
import { type PropType } from 'vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
import type { Items } from '@/interfaces/index'
import { useSidebarStore } from '@/stores/index'
import { useRoute, type RouteLocationNormalized } from 'vue-router';
const $route: RouteLocationNormalized = useRoute();
const store = useSidebarStore()
const props = defineProps({
  arrItems: {
    type: Array as PropType<Items[]>,
    required: true
  }
})
function handeItemClicked(id: number): void {
  if (store.$state.accordionItem != id) {
    store.$state.accordionItem = id
  } else {
    store.$state.accordionItem = 123
  }
}
const isExactActive = (route: string): boolean => {
  return $route.path === route;
};

</script>
<template>
  <div class="h-[100dvh] bg-[#001018] p-5 pr-0">
    <div class="flex justify-center items-end pr-5">
      <img src="/favicon.png" class="w-10" />
      <p class="text-white ml-3 text-xl">ttyt.uz</p>
    </div>
    <div class="mt-7">
      <div
        v-for="(item, index) in props.arrItems"
        :key="index"
        class="text-white pb-3 cursor-pointer"
      >
        <div class="flex items-center justify-start" @click.stop="handeItemClicked(item.id)">
          <p class="text-xl font-normal">{{ item.name }}</p>
          <BaseIcon
            :class="[store.$state.accordionItem === item.id ? 'rotate-180' : '']"
            class="w-3 h-3 text-white ml-3"
            name="down"
          />
        </div>
        <div class="ml-5" v-if="store.$state.accordionItem === item.id">
          <router-link
            class="sub-item text-base py-1 block hover:ml-2"
            v-slot="{ isExactActive }"
            v-for="(subItem, subIndex) in item.subItem"
            :key="subIndex"
            :to="subItem.route"
            :class="{'text-red-500': isExactActive(subItem.route)}"
          >
            {{ subItem.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.sub-item {
  transition: all 0.3s ease-in-out;
}
</style>
