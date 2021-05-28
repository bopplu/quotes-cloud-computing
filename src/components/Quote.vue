<template>
  <span class="text-nord5 text-5xl m-auto">{{ quote }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useQuote from '@/composition/quote'

export default defineComponent({
  name: 'Quote',
  async setup() {
    const { getQuote } = useQuote()
    const quote = await getQuote()
    return { quote }
  },
})
</script>

<style scoped></style>
