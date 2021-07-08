<template>
    <a-layout>
        <a-layout-header style="min-height:8vh">
            <Nav />
        </a-layout-header>
        <a-layout-content style="min-height:80vh">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer
            style="background:#000;min-height:12vh;text-align:center"
        >
            <a-typography-paragraph style="color:#fff;font-weight: lighter">
                Copyright &copy; LadyGuanGuan in 2020-2021
            </a-typography-paragraph>
        </a-layout-footer>
    </a-layout>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
    name: "App",
    components: { Nav },
};
</script>

<style>
main.ant-layout-content {
    position: relative;
}
#components-layout-demo-basic .code-box-demo {
    text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
    color: #fff;
    background: #7dbcea;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-header {
    background: #6aa0c7;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-footer {
    background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
    color: #fff;
    line-height: 120px;
    background: #3ba0e9;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-sider {
    background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
    min-height: 120px;
    color: #fff;
    line-height: 120px;
    background: rgba(16, 142, 233, 1);
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-content {
    background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
    margin-top: 48px;
}
</style>
