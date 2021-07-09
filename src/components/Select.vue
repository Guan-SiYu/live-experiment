<template>
    <a-space style="margin:20px">
        <a-select
            v-model:value="userCheckedBook"
            style="width: 120px"
            @change="handleCheckBook"
        >
            <a-select-option
                :value="book.F_bookgrade_id"
                :key="book.F_bookgrade_id"
                v-for="book in allSelectData"
                >{{ book.F_bookgrade }}</a-select-option
            >
        </a-select>
        <a-select
            v-model:value="userCheckedLesson"
            style="width: 120px"
            @change="handleCheckLesson"
        >
            <a-select-option
                v-model:value="lesson.F_knowledge_cat_id"
                :key="lesson.F_knowledge_cat_id"
                v-for="lesson in lessonList"
                >{{ lesson.F_knowledge_cat }}</a-select-option
            >
        </a-select>
    </a-space>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: [
        "allSelectData",
        "duserCheckedBook",
        "duserCheckedLesson",
        "dlessonList",
    ],
    data(props) {
        console.log("data func params=>", props);
        return {
            userCheckedBook: Number(props.duserCheckedBook),
            userCheckedLesson: Number(props.duserCheckedLesson),
            lessonList: props.dlessonList,
        };
    },
    methods: {
        async handleCheckBook(book_id) {
            console.log("book_id=>", book_id);
            const bookInfoObj = this.allSelectData.find(
                (item) => item.F_bookgrade_id === book_id
            );
            console.log("bookInfoObj=>", bookInfoObj);
            this.lessonList = bookInfoObj.F_knowledge_cat_list;
            this.userCheckedLesson =
                bookInfoObj.F_knowledge_cat_list[0].F_knowledge_cat_id;
            await this.$emit("on-check-book", book_id);
        },
        handleCheckLesson(value) {},
    },
    created() {},

    setup(props, context) {
        console.log(props.allSelectData);
    },
});
</script>
