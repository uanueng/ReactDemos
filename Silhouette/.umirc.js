// ref: https://umijs.org/config/
export default {
    title: 'Silhouette',
    antd: {  },
    dva: { },
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                { path: '/', component: '../pages/index' },
            ],
        },
    ]
};
