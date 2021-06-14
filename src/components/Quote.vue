<template>
  <div class="container flex flex-col items-end m-auto">
    <span class="self-center px-4 text-5xl leading-normal text-nord5">{{
      quote
    }}</span>
    <span class="pt-8 text-4xl text-nord5">&#x2015; {{ author }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useQuote from '@/composition/quote'

export default defineComponent({
  name: 'Quote',
  async setup() {
    const { getQuote } = useQuote()
    const quoteRaw = await getQuote()
    const quoteSplit = quoteRaw.split('"')
    const author = quoteSplit[quoteSplit.length - 1].trim()
    const quote = quoteSplit[1]
    return { quote, author }
  },
})
</script>

<style scoped></style>
