import Vue from 'vue';
import Router from 'vue-router';

//import ExampleComponent from './components/ExampleComponent.vue';

//import User from './components/User.vue';
//import login from './components/login.vue';
import register from './components/register.vue';
import dashboard from './components/dashboard.vue';
import profile from './components/profile.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
        mode:'history',
        routes:[
            { path: '/', component: require('./components/login.vue').default , meta:{guest:true} },
            { path: '/register', component:register,  meta:{guest:true} },
            { path: '/dashboard', component:dashboard,  meta:{requireAuth:true} },
            {path: '/profile', component:profile, meta:{requireAuth:true} }

        ]
});

// middleware

router.beforeEach((to, from, next) => {

    if(to.matched.some((record) => record.meta.requireAuth )){
        if(store.getters.isLoggedIn){
            next();
            return;

        }
        next('/');
    }   
    else {
        next();
    }
});

router.beforeEach((to, from, next) =>{
    if(to.matched.some((record) => record.meta.guest)) {
        if(store.getters.isLoggedIn){
            next('/dashboard');
            return;
        }
        next();
    }
    else{
        next();
    }
});
export default router;

