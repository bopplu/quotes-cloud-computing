<template>
  <div class="flex h-screen">
    <Suspense>
      <template #default>
        <Quote />
      </template>
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Quote from '@/components/Quote.vue'

export default defineComponent({
  name: 'App',
  components: {
    Quote,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
