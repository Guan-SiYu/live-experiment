<template>
    <Select />
    <div class="panel">
        <div class="card-box" v-for="cardItem in arr" :key="cardItem.id">
            <Card cardItem />
        </div>
    </div>
    <Pagination />
</template>
<script>
import Select from "../components/Select.vue";
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import apiSign from "@ebag/websign";

const params = {
    F_period_id: "01202144606010154803",
    F_moment: 0,
    F_teacher_id: "0-2018-0-d2f67d5c-94dc-3bb7-819f-70fa1bbd016a",
    F_accesstoken: "13e7f6375894c19ff941c791c89026a2",
};

params.F_sign = apiSign.sign(params);
console.log("params=>", params);
export default {
    data() {
        return {
            arr: [
                { id: 1, name: "a" },
                { id: 2, name: "b" },
                { id: 3, name: "c" },
                { id: 4, name: "d" },
                { id: 5, name: "e" },
                { id: 6, name: "f" },
                { id: 7, name: "g" },
                { id: 8, name: "h" },
            ],
        };
    },
    components: { Card, Pagination, Select },
    methods: {
        async fetchAllCardPanelData() {
            // const response = await axios.get("http://localhost:5000/tasks");
            // return response.data;
        },
        async created() {
            console.log(params);
            // this.task_list = await this.fetchAllCardPanelData();
        },
    },
};
</script>
<style scoped>
.panel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 40px;
}
.panel .card-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
