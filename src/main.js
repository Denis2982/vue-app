import { createApp } from 'vue'
import{createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
