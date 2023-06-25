import './assets/css/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import FivemView from "./views/FivemView.vue";
import GameDevView from './views/GameDev.vue'
import CodeProjectView from './views/CodeProject.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/fivem",
        name: "Fivem",
        component: FivemView,
    },
    {
        path: '/gamedev',
        name: 'GameDev',
        component: GameDevView
    },

    {
        path: '/codeproject',
        name: 'CodeProject',
        component: CodeProjectView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App)
app.use(router)
app.mount('#app')
