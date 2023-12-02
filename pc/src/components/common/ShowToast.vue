<script setup>
import { ref } from "vue";
import { loading } from "@/store/module/loading";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const loadings = loading();
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "150px",
  },
  spin: false,
});
const spinning = ref(true);
const showSpinning = (params) => {
  return params;
};
</script>

<template>
  <div class="show-toast" v-if="spinning">
    <a-spin tip="Loading..." :indicator="indicator" />
  </div>
</template>

<style scoped lang="less">
// .show-toast {
//   position: fixed;
//   top: 160px;
//   left: 50%;
//   transform: translateY(-50%);
//   z-index: 3;
// }
</style>