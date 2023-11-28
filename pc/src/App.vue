<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const locale = zhCN
</script>

<template>
  <div class="app">
    <a-config-provider :locale="locale" :theme="{
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
