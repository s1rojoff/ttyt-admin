import { defineStore } from 'pinia'
interface State {
  accordionItem: String | Number | null
}
export const useSidebarStore = defineStore('sidebar', {
  state: (): State => {
    return {
      accordionItem: 1
    }
  }
})
