<template>
  <div class="role">
    <page-search :search-congig="serachconfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import serachconfig from './config/search-config'
</script>

<style lang="less" scoped>
.role {
  color: red;
}
</style>
