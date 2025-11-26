<template>
  <div class="role">
    <page-search :search-config="searchConfig" />
    <page-content :content-config="contentConfig" />
    <page-modal :modal-config="modalConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
</script>

<style lang="less" scoped></style>
