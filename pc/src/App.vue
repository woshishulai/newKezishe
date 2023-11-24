<script setup>
</script>

<template>
  <div class="app">
    <a-config-provider :theme="{
      token: {
        colorPrimary: '#9a0000',
      },
    }">
      <show-toast></show-toast>
      <RouterView></RouterView>
    </a-config-provider>
  </div>
</template>

<style scoped lang="less"></style>
