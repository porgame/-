import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

export default new Router({
    routes: [{
            path: "/Movie",
            name: 'Movie',
            component: () =>
                import ('./views/Movie'),
            children: [{
                    path: "City", //子集中无需打 / 
                    component: () =>
                        import ('./components/City'),

                },
                {
                    path: "ComingSoon",
                    component: () =>
                        import ('./components/ComingSoon'),
                },
                {
                    path: "NowPlaying",
                    component: () =>
                        import ('./components/NowPlaying'),
                },
                {
                    path: "Search",
                    component: () =>
                        import ('./components/Search'),
                },
                {
                    path: "/Movie",
                    redirect: "ComingSoon"
                        //重定向，页面默认显示的组件
                }
            ]
        },
        {
            path: "/Mine",
            name: 'Mine',
            component: () =>
                import ('./views/Mine')
        },
        {
            path: "/cinema",
            name: 'Cinema',
            component: () =>
                import ('./views/Cinema')
        },
        {
            path: "/",
            redirect: "/Movie"
        }
    ]
});