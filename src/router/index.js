import { createRouter, createWebHistory } from "vue-router";
import CardPanel from "../views/CardPanel";
import CourseVideo from "../views/CourseVideo";
import UserCheckedList from "../views/UserCheckedList";
const routes = [
    {
        path: "/",
        name: "CardPanel",
        component: CardPanel,
    },
    {
        path: "/usercheckedlist",
        name: "UserCheckedList",
        component: UserCheckedList,
    },
    {
        path: "/coursevideo",
        name: "CourseVideo",
        component: CourseVideo,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
