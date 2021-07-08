<template>
    <div class="list-container">
        <nav @click="backHomePage">Back HomePage</nav>
        <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    >
                        <template #title>
                            <a href="https://www.antdv.com/">{{
                                item.title
                            }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>
<script>
import { defineComponent } from "vue";
const data = [
    {
        title: "Ant Design Title 1",
    },
    {
        title: "Ant Design Title 2",
    },
    {
        title: "Ant Design Title 3",
    },
    {
        title: "Ant Design Title 4",
    },
];
import router from "../router/index";
export default defineComponent({
    setup() {
        const backHomePage = () => {
            router.back();
        };
        return {
            data,
            backHomePage,
        };
    },
});
</script>
<style scoped>
.list-container {
    background: #fff;
    width: 60%;
    margin: 50px auto 0;
    border-radius: 20px;
    padding: 10px 20px 0;
}
.ant-page-header {
    padding: none;
}
.list-container nav {
    cursor: pointer;
}
</style>
