import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  // layout:{},
  routes: [
    { path: '/', component: '@/layouts/home/index',
      routes:[
        {
          path:'/',
          component:'@/pages/index'
        }
      ]
    },
  ],
  fastRefresh: {},
});
