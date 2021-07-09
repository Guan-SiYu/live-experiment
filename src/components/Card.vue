<template>
    <a-card hoverable style="width: 80%;">
        <template #cover>
            <img alt="example" :src="cardItem.F_cover_img_uri" />
        </template>

        <a-card-meta>
            <!-- <template #avatar>
                <a-avatar src="https://dummyimage.com/100x100" />
            </template> -->
            <template #title>
                <div
                    style="display:flex;justify-content:space-between;align-items:center"
                >
                    <div
                        style="display:flex;justify-content:space-between;align-items:center;max-width:70%;over-flow:hidden"
                    >
                        <SketchOutlined />
                        <div style="font-size:0.9rem;margin-left:10px;">
                            {{ cardItem.F_title }}
                        </div>
                    </div>
                    <div style="max-width:30%">
                        <a-button type="primary" id="quot-btn">引用</a-button>
                    </div>
                </div>
            </template>
        </a-card-meta>
    </a-card>
</template>
<script>
import { defineComponent } from "vue";
import {
    SettingOutlined,
    SketchOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
    setup() {},
    components: {
        SettingOutlined,
        EditOutlined,
        EllipsisOutlined,
        SketchOutlined,
    },
    props: {
        cardItem: {
            type: Object,
            default: {
                F_courseware_uri: "",
                F_cover_img_uri: "https://dummyimage.com/100x100",
                F_create_datetime: "",
                F_modify_datetime: "",
                F_resource_id: 0,
                F_title: "",
                F_type_detail: 0,
            },
        },
    },
});
</script>
<style scoped>
#quot-btn {
    font-size: 0.6rem;
    border-radius: 5px;
    background: #000;
    border-color: #000;
}
#quot-btn:hover {
    background: #c5808b;
    border-color: #c5808b;
}
</style>
