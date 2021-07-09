<template>
    <Select
        :allSelectData="allSelectData"
        :duserCheckedBook="book_id"
        :duserCheckedLesson="defaultUserCheckedLesson"
        :dlessonList="lessonList"
        @on-check-book="handleCheckBook"
    />
    <div class="panel">
        <div
            class="card-box"
            v-for="cardItem in curPageData"
            :key="cardItem.F_resource_id"
        >
            <Card :cardItem="cardItem" />
        </div>
    </div>
    <Pagination
        @on-pagination-togle="handlePaginationToggle"
        :dataTotal="dataTotal"
    />
</template>
<script>
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import Select from "../components/Select.vue";
import axios from "axios";
import apiSign from "@ebag/websign";
export default {
    data() {
        return {
            curPageData: [],
            dataTotal: 0,
            allSelectData: [],
            book_id: "",
            defaultUserCheckedLesson: "",
            lessonList: [],
        };
    },
    components: { Card, Pagination, Select },
    methods: {
        async fetchAllSelectData() {
            const params = {
                F_teacher_id: "0-2019-1-7cc97803-33ed-47dd-9592-bbc82de8a376",
                F_accesstoken: "18619c4da3a3add02e8edfede4dbcbf6",
                F_subject_id: 4,
            };
            params.F_sign = await apiSign.sign(params);
            const { data } = await axios({
                url:
                    "https://api.ebag-test.readboy.com/source-czvideo/v1/CzExpVideo/bookgradeAndKnowledgeCats",
                method: "get",
                params,
                responseType: "json",
            });
            return data;
        },
        async handleCheckBook(book_id) {
            this.book_id = book_id;
            const data = await this.fetchCurPageData(book_id);

            this.curPageData = data.F_list;
        },
        async fetchCurPageData(book_id, ...rest) {
            const params = {
                F_teacher_id: "0-2019-1-7cc97803-33ed-47dd-9592-bbc82de8a376",
                F_accesstoken: "18619c4da3a3add02e8edfede4dbcbf6",
                F_bookgrade_id: book_id || "1810151345190004",
                F_page: rest[0] || 1,
                F_perPageCount: rest[1] || 8,
            };
            params.F_sign = await apiSign.sign(params);

            const { data } = await axios({
                url:
                    "https://api.ebag-test.readboy.com/source-czvideo/v1/CzExpVideo/list",
                method: "get",
                params,
                responseType: "json",
            });
            this.dataTotal = data.F_total;

            return data;
        },
        async handlePaginationToggle(curPageIdx) {
            const data = await this.fetchCurPageData(this.book_id, curPageIdx);
            this.curPageData = data.F_list;
        },
    },

    async created() {
        const res = await this.fetchAllSelectData();
        if (res.F_responseNo === 10000) {
            const { F_list: allSelectData } = res;
            this.allSelectData = allSelectData;
            const defaultBook = allSelectData[0];
            this.book_id = defaultBook.F_bookgrade_id;
            const lessonList = defaultBook.F_knowledge_cat_list;
            this.lessonList = lessonList;
            this.defaultUserCheckedLesson = lessonList[0].F_knowledge_cat_id;
        }

        const pageData = await this.fetchCurPageData(this.book_id);
        this.curPageData = pageData.F_list;
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
