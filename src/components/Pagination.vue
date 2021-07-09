<template>
    <div style="margin:20px 0;display:flex;justify-content:center">
        <div style="display:flex;justify-content:center;align-items:center">
            <div style="margin-right:15px">共 {{ dataTotal }} 条</div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center">
            <a-pagination
                show-quick-jumper
                v-model:current="current"
                :total="dataTotal"
                @change="onPaginationToggle"
            />
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: {
        dataTotal: Number,
    },
    setup(props, context) {
        const current = ref(1);
        const onPaginationToggle = (pageIdx) =>
            context.emit("on-pagination-togle", pageIdx);

        return {
            current,
            onPaginationToggle,
        };
    },
});
</script>
