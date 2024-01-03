<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>

<template>
    <div class="show-grand"> </div>
</template>

<style scoped lang="less">
.show-grand {
    height: 100%;
    padding: 80px;
    background-color: #fff;
}
</style>
