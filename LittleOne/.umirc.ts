import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
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
