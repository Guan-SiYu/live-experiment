<template>
    <div style="margin:20px 0;display:flex;justify-content:center">
        <div style="display:flex;justify-content:center;align-items:center">
            <div style="margin-right:15px">共 {{ dataTotal }} 条</div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center">
            <a-pagination
                show-quick-jumper
                v-model:current="current"
                :total="500"
                @change="onChange"
            />
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const current = ref(1);
        const dataTotal = ref(12);
        const onChange = (pageNumber) => {
            console.log("Page: ", pageNumber);
        };

        return {
            current,
            onChange,
            dataTotal,
        };
    },
});
</script>
