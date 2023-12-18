<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
const loading = ref(false);
const props = defineProps({
    params: {
        type: Object,
        default: {}
    }
});
const emits = defineEmits(['closeModel', 'postApi']);
const close = () => {
    emits('closeModel');
};
const handleOk = () => {
    emits('postApi');
};
</script>

<template>
    <a-modal
        v-model:open="props.params.open"
        :title="props.params.title"
        @cancel="close"
        :confirm-loading="loading"
        @ok="handleOk"
    >
    </a-modal>
</template>

<style scoped lang="less"></style>
