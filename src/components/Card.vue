<template>
    <a-card hoverable style="width: 300px;">
        <template #cover>
            <img alt="example" src="https://dummyimage.com/600x400" />
        </template>

        <a-card-meta>
            <template #avatar>
                <a-avatar src="https://dummyimage.com/100x100" />
            </template>
            <template #title>
                <div
                    style="display:flex;justify-content:space-between;align-items:center"
                >
                    <div>Card Title</div>
                    <a-button type="primary" id="quot-btn">引用</a-button>
                </div>
            </template>
        </a-card-meta>
    </a-card>
</template>
<script>
import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        SettingOutlined,
        EditOutlined,
        EllipsisOutlined,
    },
});
</script>
<style scoped>
#quot-btn {
    border-radius: 5px;
    background: #000;
    border-color: #000;
}
#quot-btn:hover {
    background: #c5808b;
    border-color: #c5808b;
}
</style>
