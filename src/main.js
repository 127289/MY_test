import Vue from 'vue'
import App from './App.vue'
import '@/assets/iconfont/iconfont.css'
import '@/mobile/flexible.js' //自动适应宽度 改变html中的 font-size
import '@/styles/reset.css'
import router from '@/router/index.js'

import { NavBar, Tabbar, TabbarItem,Col,Row,Image as VanImage,Cell, CellGroup,Icon,Search,PullRefresh,List    } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);
Vue.use(PullRefresh);
Vue.use(List);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
