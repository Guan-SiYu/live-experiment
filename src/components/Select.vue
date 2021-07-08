<template>
    <a-space style="margin:20px">
        <a-dropdown placement="bottomCenter">
            <a-button>{{ grade }}</a-button>
            <template #overlay>
                <a-menu @click="handleCheckGrade">
                    <a-menu-item :key="item1">
                        {{ item1 }}
                    </a-menu-item>
                    <a-menu-item :key="item2">
                        {{ item2 }}
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
        <a-dropdown placement="bottomCenter">
            <a-button>{{ lesson }}</a-button>
            <template #overlay>
                <a-menu @click="handleCheckLesson">
                    <a-menu-item :key="item3">
                        {{ item3 }}
                    </a-menu-item>
                    <a-menu-item :key="item4">
                        {{ item4 }}
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </a-space>
</template>
<script>
export default {
    name: "Select",
    data() {
        return {
            grade: "八年级上册",
            lesson: "压强的研究",
            item1: "九年级下册",
            item2: "七年级全册",
            item3: "光合作用",
            item4: "浮力",
        };
    },
    methods: {
        handleCheckGrade(e) {
            this.grade = e.key;
        },
        handleCheckLesson(e) {
            this.lesson = e.key;
        },
    },
};
</script>
