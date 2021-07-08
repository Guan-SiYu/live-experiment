<template>
    <div class="navbar-container">
        <div class="navbar-title">
            <h2>{{ navTitle }}</h2>
        </div>
        <div class="navbar-checked">
            <router-link to="/usercheckedlist">
                {{ navLinkText }}

                {{ `(${checkedCount})` }}
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";
export default {
    data() {
        return {
            navLinkText: "已选资源",
        };
    },
    props: {
        navTitle: {
            type: String,
            default: "物 理 真 人 实 验",
        },
        checkedCount: {
            type: Number,
            default: 0,
        },
    },

    components: {
        MailOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
};
</script>
<style scoped>
.navbar-container {
    height: 100%;
    background: rgb(49, 49, 49);
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
}
.navbar-container .navbar-title,
.navbar-container .navbar-checked {
    display: flex;
    align-items: center;
    justify-content: center;
}
.navbar-title h2 {
    color: #eeee;
}

.navbar-container .navbar-checked {
    box-sizing: border-box;
    padding: 15px 30px;
    background: #d69aa4;
    color: #fff;
}
.navbar-container .navbar-checked:hover {
    background: #c5808b;
    color: lavender;
}
.navbar-container .navbar-checked a {
    color: #fff;
}
.navbar-container .navbar-checked a:hover {
    color: lavender;
}
</style>
